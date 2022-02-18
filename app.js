const http = require('http');

const{readFileSync} = require('fs');
//get all files
const homePage = readFileSync('nav/final/index.html')
const homeImage = readFileSync('nav/final/logo.svg')
const homeStyles = readFileSync('nav/final/styles.css')
const logic = readFileSync('nav/final/app.js')


const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})//to provide meta data about our response 
        res.write(homePage)
        res.end()
    }
    //about page
    else if(url === '/about') {
        res.writeHead(200,{'content-type':'text/html'})//to provide meta data about our response 
        res.write('<h1>About Page</h1>')
        res.end()
    }
    //styles
    else if(url === '/styles.css') {
        res.writeHead(200,{'content-type':'text/css'})//to provide meta data about our response 
        res.write(homeStyles)
        res.end()
    }
    //image
    else if(url === '/logo.svg') {
        res.writeHead(200,{'content-type':'image/svg+xml'})//to provide meta data about our response 
        res.write(homeImage)
        res.end()
    }
    //lpgic
    else if(url === '/logic.js') {
        res.writeHead(200,{'content-type':'text/javascript'})//to provide meta data about our response 
        res.write(logic)
        res.end()
    }
    else {
        res.writeHead(404,{'content-type':'text/html'})//to provide meta data about our response 
        res.write('<h1>page not found</h1>')
        res.end()
    }
}) //callback inside method createserver is called everytime our user hits the server

server.listen(5000)