const RoomsModel = require('../models/room')
const MenssageModel = require('../models/menssage')

const createMenssage = (menssage) => {
    
    let msn = new MenssageModel(menssage)

    return new Promise((resolve, reject) => {
        msn.save()
            .then(() => resolve())
            .catch((err) => reject(err))
    })
}

const create = ({name}) => {
    
    let room = new RoomsModel({
        name: name
    })

    return new Promise((resolve, reject) => {
        room.save()
            .then(() => resolve())
            .catch((err) => reject(err))
    })
}

const find = () => {
    
    return new Promise((resolve, reject) => {
        RoomsModel.find({}, (err, res) => {
            if(err) reject(err)

            resolve(res)
        })
    })
    
}

const findByID = ({id}) => {
    
    return new Promise((resolve, reject) => {
        RoomsModel.findById({_id: id}, (err, res) => {
            if(err) reject(err)

            resolve(res)
        })
    })
    
}

module.exports = {
    create,
    createMenssage,
    find,
    findByID
}