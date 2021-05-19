// const path = require('path');

// var pathObj = path.parse(__filename);

// // console.log(pathObj);

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);
// console.log('Free  Memory: ' + freeMemory);


// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free  Memory: ${freeMemory}`);



const fs = require('fs');

// const files = fs.readdirSync('./');

// console.log(files);

fs.readdir('./', function(err, files){

    if(err) console.log('Error', err);
    else console.log('Result', files);
});