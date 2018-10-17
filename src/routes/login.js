const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    return res.render('login')
})

router.post('/online', (req, res) =>{
    console.log(this.localStorage)
    
    res.redirect('/running')
})

module.exports = router