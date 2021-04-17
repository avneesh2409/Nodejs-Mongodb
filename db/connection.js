const mongoose = require('mongoose');
const config = require('../config/config');
const dbConfig = require('../config/db')[config.server.mode];

let url = `${dbConfig.protocol}://${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;

mongoose.connect(url,{useNewUrlParser: true}).then(()=>{
    console.log("successfully connected to db !!");
}).catch((err)=>{
    console.log("Unable to connect to db !!",err)
});

module.exports = mongoose;