const express = require("express");
const app = express();
//dummy server uses and creation 
// CRUD = create read update delete

app.use(express.json());
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

//here you can add authentication as middleware since evry method has authentication separetely

//since app.use can understand every type of request hence we use .use 
app.use("/admin", (req,res,next)=>{
    const token = "ABCDEF";
    const  Access = token === "ABCDEF" ? 1:0;

    if(!Access)
        response.status(403).send("No Permission");

    next();
})


app.get("/food",(req,res)=>{
    res.status(200).send(FoodMenu);
})
app.post("/admin",(req,res)=>{
    FoodMenu.push(req.body);
    res.status(201).send("food item added successfully");
})
app.patch("/admin/:id", (req, res) => {
        const id = parseInt(req.params.id);

        const food_idx = FoodMenu.findIndex(item => item.id === id);

        if (food_idx === -1) {
            return res.status(404).send("Item not found");
        }

        // JSON data coming from Postman/frontend
        const { food, category, price } = req.body;

        // Update item
        FoodMenu[food_idx] = {
            ...FoodMenu[food_idx],
            food: food,
            category: category,
            price: price
        };

//         FoodMenu[food_idx] = {
//              ...FoodMenu[food_idx],
//              ...req.body
//              };                       //you can write it as this too but its pro level

        res.send("Item successfully updated");
});
app.delete("/admin:id",(req,res)=>{
        const id = parseInt(req.params.id);//dhyaan rkho ki ye parameter  h to aise acces krenge
        const food_idx = FoodMenu.findIndex(item => item.id === id);     

        if(index == -1)
        {
            res.send("item not found");
        }
        else 
        {
            FoodMenu.splice(index,1);
            res.send(" item Succesfully Deleted");
        }
})


app.listen(4000,()=>{
    console.log("server is running at port 4000")
})