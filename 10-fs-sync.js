// fs Sync - file system module

const {readFileSync, writeFileSync} = require('fs'); //destructuring method

const first = readFileSync('./content/subfolder/first.txt','utf8');
const second = readFileSync('./content/subfolder/second.txt','utf8');

console.log(first, second);

// The following line is for writing normal line
writeFileSync('./content/subfolder/result_sync.txt',`Here is the result: ${first}, ${second}, third and fourth`);

// The following line is for Appending.. the flag has to be set
writeFileSync('./content/subfolder/result_sync.txt',`Here is the result: ${first}, ${second}, third and fourth`, {flag: 'a'});
