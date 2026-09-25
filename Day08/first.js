const express = require("express");
const app = express();

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