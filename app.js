const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const session = require('express-session')
const sharedsession = require("express-socket.io-session")

require('dotenv').load()

/* MODEL's */
const Room = require('./src/models/room')

/* ROUTER's */
const loginRouter = require('./src/routes/login')
const roomsRouter = require('./src/routes/rooms')

app.use(bodyParser.urlencoded({ extended: true }))



/* ADD SESSION */
const sessionAPP = session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: true
})

app.use(sessionAPP)

app.set('views', path.join(__dirname, '/src/views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'src/public')))


app.get('/', (req, res) =>{
    return res.send('<h1>OK</h1>')
})

app.use('/login', loginRouter)
app.use('/rooms', roomsRouter)


/* ADD SOCKET.IO */
app.io = require('socket.io')()

/* SOCKET.IO */
app.io.use(sharedsession(sessionAPP, { autoSave:true }))
app.io.on('connection', socket => {
    socket.on('addRoom', roomName => {
        const room = new Room({
            name: roomName
        })
        room.save()
            .then(() => {
                app.io.emit('newRoom', room)
            })
    })

    socket.on('newMenssager', msm => {
        console.log(msm)
    })
})

app.get('/running', (req, res) => {
    res.render('running')
})

module.exports = app