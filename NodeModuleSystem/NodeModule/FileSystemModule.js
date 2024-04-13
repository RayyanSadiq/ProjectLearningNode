const fs = require('fs')

// synchronus
const files = fs.readdirSync('./')
console.log(files)

// asynnchronus
fs.readdir('./', function(error, files) {
    if (error) console.log('Error', error);
    else console.log('Result', files);
}) 