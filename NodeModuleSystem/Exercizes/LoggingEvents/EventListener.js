const Logger = require('./Logger');
const logger = new Logger();

// Register a listener
logger.on('logged',() => {
    console.log('I have been logged');
});

logger.log('message');