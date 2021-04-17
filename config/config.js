const path = require('path');
module.exports = {
    server:{
        port:process.env.PORT || 5000,
        mode:process.env.NODE_ENV || "dev"
    },
    logFile:{
        path : path.join(__dirname,"server.log")
    },
}