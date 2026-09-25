const express = require("express");
const app = express();
//dummy server uses and creation 
// CRUD = create read update delete

const FoodMenu = [
    {id:1,food: "chowmein",category : "veg" , price : 100},
    {id:2,food: "vada pav",category : "veg" , price : 200},
    {id:3,food: "halwa",category : "veg" , price : 300},
    {id:4,food: "pizza",category : "veg" , price : 400},
    {id:5,food: "sandwitch",category : "veg" , price : 500},
    {id:6,food: "dahi bada",category : "veg" , price : 600},
    {id:7, food: "burger", category: "veg", price: 150},
    {id:8, food: "momos", category: "veg", price: 120},
    {id:9, food: "biryani", category: "non-veg", price: 250},
    {id:10, food: "pasta", category: "veg", price: 180},
    {id:11, food: "fried rice", category: "veg", price: 160},
    {id:12, food: "chole bhature", category: "veg", price: 140},
    {id:13, food: "butter chicken", category: "non-veg", price: 350},
    {id:14, food: "spring roll", category: "veg", price: 110},
    {id:15, food: "manchurian", category: "veg", price: 170},
    {id:16, food: "tandoori chicken", category: "non-veg", price: 320},
]

const add_to_cart = []//user ka jo bhi food add hoga wo idhar show hoga 


app.get("/food",(req,res)=>{
    res.send(FoodMenu);
})

app.post("admin",(req,res)=>{
    
})


app.listen(4000,()=>{
    console.log("server is running at port 4000")
})