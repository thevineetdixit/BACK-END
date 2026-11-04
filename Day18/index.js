const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users")
require('dotenv').config();

app.use(express.json());

// CRUD: Create Read Update Delete

app.post("/register", async (req,res) => {
    try {
            await User.create(req.body);
            res.send("User Registration successful");
    }
    catch (err) {
            res.send("Error" + err.message);
    }
})

app.get("/info" , async (req,res) => {

    try {
        const data = await User.find();
        res.send(data);
    }
    catch (err) {
        res.send("error" + err.message);
    }

})

app.get("/user/:id", async (req,res) => {

    try {
        const result = await User.findById(req.params.id);
        res.send(result);
    }
    catch (err) {
        res.send("Error" + err.message);
    }
})

app.delete("/user/:id", async (req, res) => {
    try {
        const result = await User.findByIdAndDelete(req.params.id);

        if (!result) {
            return res.status(404).send("User not found");
        }

        res.send("User deleted successfully");
    }
    catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});

app.patch("/user", async (req, res) => {
    try {
        const { _id, ...update } = req.body;

        const result = await User.findByIdAndUpdate(
            _id,
            update,
            { new: true, runValidators: true }
        );

        res.send("done");
    }
    catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});

main()
.then(async ()=>{
    console.log("Connected to DB")
    app.listen(3000, ()=>{
        console.log("Listening at port 3000");
    })
})
.catch((err)=>console.log(err));



