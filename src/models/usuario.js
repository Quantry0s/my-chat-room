const mongoose = require('mongoose')

const UsuarioShemma = mongoose.Schema({
    name: String
})

module.exports = mongoose.model('Usuarios', UsuarioShemma)