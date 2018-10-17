const mongoose = require('mongoose')

const MenssagerSchema = mongoose.Schema({
    name: String,
    author: String,
    when: Date,
    type: String,
    messager: String
}) 

module.exports = mongoose.model('Mensager', MenssagerSchema)