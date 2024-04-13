let _ = require('underscore');

// the require function searches for a file in this order
// 1. Core module
// 2. File or folder
// 3. node_modules

let result = _.contains([1,2,4], 2)
console.log(result)