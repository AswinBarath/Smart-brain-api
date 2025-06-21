const handleRegister = async (req, res, bcrypt, prisma) => {
    const {email, name, password} = req.body;

    console.log('Registration attempt:', { email, name, password: password ? '[HIDDEN]' : 'MISSING' });

    if(!email || !name || !password) {
        console.log('Missing required fields:', { email: !!email, name: !!name, password: !!password });
        return res.status(400).json('incorrect form submission');
    }

    try {
        const hash = bcrypt.hashSync(password);
        console.log('Password hashed successfully');
        
        // Create user first, then login to satisfy FK constraint
        const result = await prisma.$transaction(async (tx) => {
            console.log('Creating user record...');
            const user = await tx.user.create({
                data: {
                    email: email,
                    name: name,
                    joined: new Date()
                }
            });
            console.log('User record created:', user.id);

            console.log('Creating login record...');
            const login = await tx.login.create({
                data: {
                    hash: hash,
                    email: email
                }
            });
            console.log('Login record created:', login.id);

            return user;
        });

        console.log('Registration successful:', result.id);
        res.json(result);
    } catch (err) {
        console.error('Registration error details:', {
            message: err.message,
            code: err.code,
            meta: err.meta,
            stack: err.stack
        });
        
        // More specific error messages
        if (err.code === 'P2002') {
            res.status(400).json("Email already exists");
        } else if (err.code === 'P2025') {
            res.status(400).json("Database connection failed");
        } else {
            res.status(400).json("unable to register");
        }
    }
}

module.exports = {
    handleRegister: handleRegister
};

