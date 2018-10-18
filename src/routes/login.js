const express = require('express')
const router = express.Router()
const loginController = require('../controllers/login.controllers')

router.get('/', (req, res) =>{
    return res.render('login')
})

router.post('/online', (req, res) =>{
    console.log(this.localStorage)
    
    res.redirect('/running')
})

router.post('/create', (req, res) =>{
    loginController.create(req.body.name, req.body.psw)
        .then(() => {
            return res.render('rooms')
        })
        .catch((err) => {
            console.log('ocorreu um erro', err)
        })
})

module.exports = router