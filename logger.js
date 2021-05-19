const EventEmitter = require('events');
const emitter = new EventEmitter(); // instance of EventEmitter class



var url = 'http://mylogger.io/log';

function log(message){
    //send http req
    console.log(message);
    //Raise a event
emitter.emit('messageLogged', {id: 1, url: 'http://'});

}


module.exports = log;  