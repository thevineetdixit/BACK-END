const express = require('express');

const app = express();

//Rememeber my friend you should not write home page like "/" first because express js will stop here only and stop reading furhter /contacts or /about
//always home page at last

app.use("/contacts",(req, res) => {
    res.send("this is my contacts page");
});


app.use("/about/:id",(req, res) => {
    console.log(req.params);
    res.send("hello this is coder army ka jawaan");
});

app.use("/",(req, res) => {
    res.send("this is my home page");
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});