const express = require('express')
const router = express.Router()
const roomsControllers = require('../controllers/rooms.controllers')
const loginControllers = require('../controllers/login.controllers')


router.get('/', (req, res) =>{

    return loginControllers.findByID({_id: "5bca9c06d00a742ee8558011"})
        .then((user) =>{ 
            roomsControllers.find()
            .then((rooms) =>  res.render('rooms', {rooms, user}))
            .catch((err) => console.err(err))
        })
        .catch(err => console.log(err))
})

module.exports = router