// Path module

const path = require('path')
const os = require('os')

// A platform specific separator
const platformSeparator = path.sep;

console.log(`The separator for ${os.type()} OS is "${platformSeparator}"`);
 
const filePath = path.join('\content','subfolder','test.txt');
console.log(`The required path is ${filePath}`);

const base = path.basename(filePath);
console.log(`The base filename is ${base}`);

//The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
// your application is going to run in different environment
// eg heroku or digital ocean
 
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');

console.log(absolute);