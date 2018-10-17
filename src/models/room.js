const mongoose = require('mongoose')

const RoomShemma = mongoose.Schema({
    name: String
})

module.exports = mongoose.model('Room', RoomShemma)