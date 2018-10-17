const mongoose = require('mongoose')

mongoose.Promise = global.Promise

function connect(url) {
    return new Promise((resolve, reject) => {
        mongoose.connect(url,  { useNewUrlParser: true })
            .then(() => resolve())
            .catch((err) => reject(err))
    })
}

module.exports = connect
