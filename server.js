const http = require('http');
const url = require('url');


// const server = http.createServer((req,res) => {
//     if(req.method === 'GET' && req.url === '/'){
//         res.writeHead(200 , {'content-type': 'plain/text'});
//         res.end('Welcome to NodeJS backend project')
//     } else if(req.method === 'POST' && req.url ==='/submit'){
//         let body ='';
//         req.on('data' , (chunk)=>{
//             body += chunk.toString();
//         })
//         req.on('end' , ()=>{
//             res.writeHead(200 , {'content-type':'application/json'})
//             res.end(JSON.stringify({message:'Data received' , data:body}))
//         })
//     } else if (req.method === 'GET'  && req.url.startsWith('/search')){
//         const queryObject = url.parse(req.url , true).query;
//         res.writeHead(200 , {"content-type":'application/json' , "cutom-header":'NodeJS Server' , "track-id":'node77654352'});
//         res.end(JSON.stringify({message:'Query received' , queryObject:queryObject}))
//     } else{
//         res.writeHead(404 , {'content-type': 'text/plain'});
//         res.end('Requested page not found');
//     }
// });


const server = http.createServer((req,res) => {
    logRequest(req,res, (req,res) => {
        const {pathname} = url.parse(req.url);
        if(pathname.startsWith('/user/')){
            const userId = pathname.split('/')[2];
            res.writeHead(200 , {'content-type':'text/plain'});
            res.end(`UserId : ${userId}`);
        }else{
            res.writeHead(404 , {'content-type':'text/plain'});
            res.end('Route not found');
        }    
    })
});


function logRequest(req,res,next){
    console.log(`${req.method} request made to ${req.url}`);
    next(req,res);
}



const PORT = 3000;
const IP_ADDRESS = 'localhost';
server.listen(PORT , ()=>{
    console.log(`||| nodeJS server started http://${IP_ADDRESS}:${PORT}`)
});
