const mongoose = require('mongoose')

const MenssagerSchema = mongoose.Schema({
    author: String,
    when: {type: Date, default: Date.now },
    type: {type: String, default: 'text'},
    messager: String,
    idRoom: mongoose.SchemaTypes.ObjectId
}) 

module.exports = mongoose.model('Mensager', MenssagerSchema)