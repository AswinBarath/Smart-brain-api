const getProfile = (prisma) => async (req, res) => {
    const { id } = req.params;
    
    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) }
        });

        if (user) {
            res.json(user);
        } else {
            res.status(400).json('Not found');
        }
    } catch (err) {
        console.error('Profile error:', err);
        res.status(400).json('Error getting user');
    }
}

module.exports = {
    getProfile
};

