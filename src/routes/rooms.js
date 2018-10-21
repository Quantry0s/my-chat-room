const express = require('express')
const router = express.Router()
const roomsControllers = require('../controllers/rooms.controllers')
const io = require('socket.io')


router.get('/', (req, res) =>{
    const user = req.session.user
    console.error(typeof(user) === typeof(undefined))
    if(typeof(user) === typeof(undefined)){
        return res.status(404).redirect('/login')
    }else {
        return  roomsControllers.find()
        .then((rooms) =>  res.render('rooms', {rooms, user}))
        .catch((err) => console.error(err))
    }      
})

router.post('/menssager', (req, res) => {
    return roomsControllers.createMenssage({
        name: 'Fran',
        author: 'alex Dias dos Santos',
        type: 'text',
        messager: req.body.menssage,
        idSala: '5bcaa4d5e4286b309c50971a'
    })
    .then((msn) => {
        io.emit('newMensage', msn)
        res.send('rooms')
    })
    .catch((err) => console.error(err))
     
})

module.exports = router