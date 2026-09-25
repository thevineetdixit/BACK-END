const express = require("express");
const app = express();

//what is middleware?,what will you answer
// okay so you asked me what is middleware in backend ,middleware is all the code or functionality that comes in between our initial req and the final response,like we go throug multiple next function between our first app.use then to multiple middlewares that do specific tasks and then move forward they dont send response but they do participate in transferring data or can say manipulated data to the final response function
//so that is called as middleware nin my terms i dont know what does google say about it lets listen to his bullshit 

//In Express.js, middleware is a function that executes during the request-response lifecycle of an HTTP request. It sits "in the middle" between the raw incoming request from the client and the final route handler or response sent back to the client

app.use("/user",(req,res) =>{ //this is our routing path and this is out function
    console.log("i am first");
    next();
    res.send("first");
    // console.log("first first");//dont think ki res.send retur point h
    //ye pehla callback h to yeahi hoga 
    //but imagine if you send two response for one request what will happen
    // res.send("first ka second response")
    //this will end it server side error,output will be fine,the first response will be alright 
    //but the second response wont be send because you cant send res without a request


    //next parameter in (req,res,next)//next() stores the ref of the next function to be called
    // next();
},
(req,res) => {
    console.log("i am second")
    res.send("second");
})




app.listen(3000, ()=>{
    console.log("Listening at port 3000");
})


// Request: Log ko maintain karta
// Timing: Kis type ki request thi, URL