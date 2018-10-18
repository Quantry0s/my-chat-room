const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
require('dotenv').load()

/* ROUTERs */
const loginRouter = require('./src/routes/login')
const roomsRouter = require('./src/routes/rooms')
const session = require('express-session')
app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, '/src/views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'src/public')))

/* CREATE SESSION */ 
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 10*60*1000 }
  }))

app.post('/', (req, res) =>{
    console.log(req.body)
    return res.send('<h1>OK</h1>')
})

app.use('/login', loginRouter)
app.use('/rooms', roomsRouter)

app.get('/running', (req, res) => {
    res.render('running')
})

module.exports = app