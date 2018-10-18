const mongoose = require('mongoose')

const UsuarioShemma = mongoose.Schema({
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
    }
})

module.exports = mongoose.model('Usuarios', UsuarioShemma)