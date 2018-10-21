const app = require('../app')
const port = process.env.PORT || 3030

const http = require('http').createServer(app)
app.io.attach(http)

const connect = require('../src/DB/DB')
require('dotenv').load()


connect(process.env.URL_MONGO_DB, { useNewUrlParser: true })
    .then(() =>{
        http.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    })
    .catch((err) => console.log(err) )


