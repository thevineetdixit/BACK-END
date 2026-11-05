const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users")
const validate = require("./utils/ValidateUser")
const bcrypt = require('bcrypt')
require('dotenv').config();

app.use(express.json());

// CRUD: Create Read Update Delete

app.post("/login", async (req, res) => {
    try {
        const person = await User.findById(
            req.body._id
        );

        if (!person)
            throw new Error("User not found");

        const isPasswordValid = await bcrypt.compare(
            req.body.password,  // Plain password from Postman
            person.password     // Hashed password from MongoDB
        );

        if (!isPasswordValid)
            throw new Error("Wrong password");

        res.send("Login successful");
    }
    catch (err) {
        res.status(401).send("Error in login: " + err.message);
    }
});


app.post("/register", async (req, res) => {
    try {
        // 1. Validate incoming data
        validate(req.body);

        // 2. Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // 3. Store hashed password in MongoDB
        const user = await User.create({
            ...req.body,
            password: hashedPassword
        });

        res.send("User Registration successful");
    }
    catch (err) {
        res.status(400).send("Error: " + err.message);
    }
});

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



