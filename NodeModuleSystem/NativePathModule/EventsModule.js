const EventEmitter = require("events");
const { emit } = require("process");
const emitter = new EventEmitter();

// Register a Listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
    console.log
})


// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'});

 
