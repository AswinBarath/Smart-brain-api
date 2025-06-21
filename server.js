const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const prisma = require('./lib/prisma');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const app = express();

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => { res.send('success') })

app.post('/signin', (req, res) => { signin.handleSignin(req, res, bcrypt, prisma) })

app.post("/register", (req, res) => {register.handleRegister(req, res, bcrypt, prisma) })

app.get('/profile/:id', profile.getProfile(prisma) )

app.put('/image', image.handleImage(prisma) )
app.post('/imageurl', image.handleApiCall )

app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT}`)
})
