var mod = require('./program6-module')
var dir = process.argv[2]
var ext = process.argv[3]
mod(dir, ext, function(err, list) {
    if(err)
        return console.log(err)
    list.forEach(function(file) {
        console.log(file)
    })
})