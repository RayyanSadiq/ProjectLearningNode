const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register a Listener
emitter.on('messageLogged', function(arg){
    console.log('Listener called', arg);
   
})


// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'});

 
