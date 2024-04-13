const os = require('os')

let totalMemory  = os.totalmem();
let freeMemory = os.freemem();

console.log(`${freeMemory} out of ${totalMemory}`)