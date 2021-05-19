
const EventEmitter = require('events');
const emitter = new EventEmitter(); // instance of EventEmitter class

//Register a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
})


 const log = require('./logger');
 log('message');