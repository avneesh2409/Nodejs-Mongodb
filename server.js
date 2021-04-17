const express = require('express');
const fs  = require('fs');
const app = express();
const http = require('http');
const httpServer = http.createServer(app);
const config = require('./config/config');
const apiRouter = require('./route');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use((req,res,next)=>{
	let now = new Date().toString();
	let log = `path ${req.path} url ${req.url} current time ${now}`;
	console.log(log);
	fs.appendFile(config.logFile.path,log,(err)=>{
		console.log("log saved !!");
	});
next();
});
app.use('/api/v1',apiRouter);

module.exports = httpServer;