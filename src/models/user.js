const mongoose = require('mongoose')

const UserShemma = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    account: {
        type: String,
        default: ['slave']
    },
    avatar: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', UserShemma)