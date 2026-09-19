const http = require('http');
//the http is a module in nodejs which allow us to create a server 

const server = http.createServer((req,res)=>{
    
    //ab routing try krte h basics
    //jo bhi domain or port ke aage ka link hota h wo req hoti h 
    if(req.url==="/")//node parser btata h ki url kya h uske liye 
    res.end("hello coder army");
    else if(req.url==="/contacts")
        res.end("these are my contacts");
    else if(req.url === "/about")
        res.end("this is my about page");
    else 
    res.end("han betichod");
});//lo ye ban gya server

//ab server ban gya ab wo sunega kaha,i mean where the server will lookout for request
// server needs to be alert at a particular location for requests (a term called "LISTEN")

//we can explicitely mark the location wehre this server http will listen 
server.listen(4000, ()=>{
    console.log("hello i am listening at port number 4000");
});