const UserModel = require('../models/user')

const create = ({name, psw}) => {
    let user = new UserModel({
        name: name,
        password: psw
    })

    return user.save
}

module.exports = {
    create
}