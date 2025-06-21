const handleSignin = async (req, res, bcrypt, prisma) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json('incorrect form submission');
    }

    try {
        // Find login record
        const loginData = await prisma.login.findUnique({
            where: { email: email },
            select: { hash: true }
        });

        if (!loginData) {
            return res.status(400).json("Wrong credentials!");
        }

        const isValid = bcrypt.compareSync(password, loginData.hash);
        if (isValid) {
            // Find user record
            const user = await prisma.user.findUnique({
                where: { email: email }
            });

            if (user) {
                res.json(user);
            } else {
                res.status(400).json("Unable to get user");
            }
        } else {
            res.status(400).json('wrong credentials');
        }
    } catch (err) {
        console.error('Signin error:', err);
        res.status(400).json("Wrong credentials!");
    }
}

module.exports = {
    handleSignin: handleSignin
};

