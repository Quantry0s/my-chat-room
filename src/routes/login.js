const express = require('express')
const router = express.Router()
const loginController = require('../controllers/login.controllers')
const util = require('../util/util')

router.get('/', (req, res) =>{
    return res.render('login')
})

router.get('/create', (req, res) =>{
    return util.getIcons()
        .then(icons => res.render('login_create', {icons, blankField: false}))
        .catch((err) => console.log(err))
     
})

router.post('/online', (req, res) =>{
    res.redirect('/running')
})

router.post('/create', (req, res) =>{
    req.session.user = {
        name:  req.body.name,
        avatar: req.body.options

    }
    if(req.body.name !== ''  || req.body.password !== '') {
        loginController.create({
            name: req.body.name,
            password: req.body.password,
            avatar: req.body.options
        })
        .then(() => {
            return res.redirect('/rooms')
        })
        .catch((err) => {
            console.log('ocorreu um erro', err)
        })
        
    } else {
        return util.getIcons()
        .then(icons => res.render('login_create', {icons, blankField: true}))
        .catch((err) => console.log(err))
    }
    
    
})

router.get('/teste',(req, res) => {
    console.log('teste => ', req.session)
    return res.send(`
    <h1>Teste</h1>
    ${req.session.user.name}
    `)
})

module.exports = router