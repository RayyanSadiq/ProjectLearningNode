
var message = "jike"
// we dont have window as the global object anymore, instead we have an object named literally global

// instead of mehtods and variables being appeneded to the windows object like how it is in vanilla JS in browsers, we now append to
// the Node global object instead
 console.log(global.message) // prints undefined
 console.log(message) // prints the message

// variables or members made in here are only usebale in this file even if attached to the global object