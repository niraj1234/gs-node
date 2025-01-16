//console.log('Hello Niraj');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const url = require('url');
const crypto = require('crypto');
const sayHello = require('./greetings.js');
const lodash = require('lodash');


// Read data from file 
fs.readFile('example.txt' , 'utf-8' , (err,data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})

// Write content to file 
const content = 'Hello Niraj Data to be written here';
fs.writeFile('output.txt' , content , (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log("File written successfully !!!");
})


// Basic server creation
// const server  = http.createServer((req,res) => {
//     res.statusCode = 200 ;
//     res.setHeader('Content-Type' , 'text/plain');
//     res.end('Hello from NodeJS backend');
// })

// server.listen( 3000 , () => {
//     console.log('Server running at port 3000');
// })


const numbers = [1,2,3,4,5,6,7];
const reversed = lodash.reverse(numbers);
console.log(reversed);