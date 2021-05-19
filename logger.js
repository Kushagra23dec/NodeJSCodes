const EventEmitter = require('events');




var url = 'http://mylogger.io/log';


class Logger extends EventEmitter{
    log(message) {
        //send http req
        console.log(message);
        //Raise a event
    this.emit('messageLogged', {id: 1, url: 'http://'});
    
    }

}

module.exports = Logger;  