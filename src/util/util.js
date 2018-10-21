const fs = require('fs')
const path = require('path')

const  getIcons = () => {
    let src = path.parse(path.parse(__filename).dir).dir

    return new Promise((resolve, reject) => {
        fs.readdir(path.join(src,'/public/img/icon/'), (err, files) =>{
            if(err) reject(err)

            resolve(files)
        })
    })

}

module.exports ={
    getIcons
}