var fs = require('fs')
var list=[]
var path = require('path')
module.exports = function(dir, ext, callback) {
    list = []
    fs.readdir(dir, function(err,files){
        if(err) 
            return callback(err)
        files.forEach(function(file) {
            if(path.extname(file) === '.' + ext) {
                list.push(file)
            }
        })
        return callback(null,list)
    })

}
