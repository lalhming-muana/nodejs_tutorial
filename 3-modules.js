// Module - encapsulated code (only share the minimum)
//
// CommonJS - every file is a module (by default)

const names = require('./4-names') // the names is an object
const sayHi = require('./5-utils') // the names is an object

require('./7-mind-grenade');

console.log(names.john);

sayHi('susan'); // Here only the sayHi function is exported
sayHi(names.john);
sayHi(names.peter);