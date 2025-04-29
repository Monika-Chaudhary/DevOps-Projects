var http = require('http');

//create server object
http.createServer(function (req, res){
	res.write('***Hello Welcome to my node application***')
	res.end();
}).listen(3000);

/*const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
res.send('Hello Welcome to my node application');
});
app.listen(port, ()=>{
console.log(`App listen at http://:${port}`);
});*/
