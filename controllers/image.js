const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: process.env.CLARIFAI_API
  });
const handleApiCall = (req, res) => {
    app.models
       .predict( Clarifai.FACE_DETECT_MODEL, req.body.input )
       .then(data => {
           res.json(data);
       })
       .catch(err => res.status(400).json('unable to work with API'))
}

const handleImage = (prisma) => async (req, res) => {
    const { id } = req.body;
    
    try {
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(id) },
            data: {
                entries: {
                    increment: 1
                }
            },
            select: {
                entries: true
            }
        });

        res.json(updatedUser);
    } catch (err) {
        console.error('Image update error:', err);
        res.status(400).json('unable to get entries');
    }
}

module.exports = {
    handleImage,
    handleApiCall
}