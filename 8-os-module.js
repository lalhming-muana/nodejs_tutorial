// Now we look at the OS module

const os = require('os')

// info about the current user
const user = os.userInfo();
console.log(user);

// method to return the system uptime
const uptime = os.uptime()
console.log(`The system uptime is ${uptime} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem:  os.freemem(),

}
