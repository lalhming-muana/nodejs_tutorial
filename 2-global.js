/*
GLOBALS  there are no windows only variables !!!!

__dirname  - path to current directory

__filename - filename

require    - function to use modules(CommonJS)

module     - info about current modules

process    - info about env where the process is executed

*/
console.log(__dirname)

setInterval(() => {
    console.log('POST check from the server after every 1000ms');
    console.log(`Signal directory source ${__dirname}`);
}, 1000);