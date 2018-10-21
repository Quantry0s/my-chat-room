const UserModel = require('../models/user')

const create = ({name, password, avatar}) => {
    
    let user = new UserModel({
        name: name,
        password: password,
        avatar: avatar
    })

    return new Promise((resolve, reject) => {
        user.save()
            .then(() => resolve())
            .catch((err) => reject(err))
    })
}

const find = () => {
    
    return new Promise((resolve, reject) => {
        UserModel.find({}, (err, res) => {
            if(err) reject(err)

            resolve(res)
        })
    })
    
}

const findByID = (id) => {
    
    return new Promise((resolve, reject) => {
        UserModel.findById(id, (err, res) => {
            if(err) reject(err)

            resolve(res)
        })
    })
    
}

module.exports = {
    create,
    find,
    findByID
}