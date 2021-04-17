const server = require('./server.js');
const port = process.env.PORT || 5000;
require('./db/connection');
server.listen(port,()=>{
	console.log(`server running at ${port}`);	
})