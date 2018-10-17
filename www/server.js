const app = require('../app')
require('dotenv').load()

const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3030

const connect = require('../src/DB/DB')

const Room = require('../src/models/room')

io.on('connection', socket => {
    socket.on('addRoom', roomName => {
        const room = new Room({
            name: roomName
        })
        room.save()
            .then(() => {
                io.emit('newRoom', room)
            })
        console.log('Minha Sala', roomName)
    })
})


connect(process.env.URL_MONGO_DB, { useNewUrlParser: true })
    .then(() =>{
        http.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    })
    .catch((err) => console.log(err) )


