const http = require('http');

const server = http.createServer((req,res) => {
    if(req.method === 'GET' && req.url === '/'){
        res.writeHead(200 , {'content-type': 'plain/text'});
        res.end('Welcome to NodeJS backend project')
    } else if(req.method === 'POST' && req.url ==='/submit'){
        let body ='';
        req.on('data' , (chunk)=>{
            body += chunk.toString();
        })
        req.on('end' , ()=>{
            res.writeHead(200 , {'content-type':'application/json'})
            res.end(JSON.stringify({message:'Data received' , data:body}))
        })
    } else{
        res.writeHead(404 , {'content-type': 'text/plain'});
        res.end('Requested page not found');
    }
});


const PORT = 3000;
const IP_ADDRESS = 'localhost';
server.listen(PORT , ()=>{
    console.log(`||| nodeJS server started http://${IP_ADDRESS}:${PORT}`)
});
