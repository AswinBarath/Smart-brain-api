const handleRegister = async (req, res, bcrypt, prisma) => {
    const {email, name, password} = req.body;

    if(!email || !name || !password) {
        return res.status(400).json('incorrect form submission');
    }

    try {
        const hash = bcrypt.hashSync(password);
        
        // Use Prisma transaction
        const result = await prisma.$transaction(async (tx) => {
            // Create login record
            const login = await tx.login.create({
                data: {
                    hash: hash,
                    email: email
                }
            });

            // Create user record
            const user = await tx.user.create({
                data: {
                    email: email,
                    name: name,
                    joined: new Date()
                }
            });

            return user;
        });

        res.json(result);
    } catch (err) {
        console.error('Registration error:', err);
        res.status(400).json("unable to register");
    }
}

module.exports = {
    handleRegister: handleRegister
};

