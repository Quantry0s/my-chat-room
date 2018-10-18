const UserModel = require('../models/user')

const create = ({name, psw}) => {
    
    let user = new UserModel({
        name: name,
        password: psw
    })

    return new Promise((resolve, reject) => {
        user.save()
            .then(() => resolve())
            .catch((err) => reject(err))
    })
}

module.exports = {
    create
}