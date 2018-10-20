const UserModel = require('../models/user')

const create = ({name, psw}) => {
    
    let user = new UserModel({
        name: name,
        password: psw,
        avatar: '006-pokemon-5.png'
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