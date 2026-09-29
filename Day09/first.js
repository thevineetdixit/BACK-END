const express = require("express");
const app = express();

const { Auth } = require("./middleware/auth");
const FoodMenu = require("./foodmenu");

// CRUD = Create Read Update Delete

app.use(express.json());


// ======================================================
// CART
// ======================================================

const add_to_cart = [];


// ======================================================
// ADMIN AUTHENTICATION
// ======================================================

app.use("/admin", Auth);


// ======================================================
// FOOD MENU
// ======================================================

// Anyone can see food menu
app.get("/food", (req, res) => {
    res.status(200).send(FoodMenu);
});


// ======================================================
// ADMIN ROUTES
// ======================================================

// Add food
app.post("/admin", (req, res) => {

    FoodMenu.push(req.body);

    res.status(201).send("Food item added successfully");
});


// Update food
app.patch("/admin/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const food_idx = FoodMenu.findIndex(item => item.id === id);

    if (food_idx === -1) {
        return res.status(404).send("Item not found");
    }

    FoodMenu[food_idx] = {
        ...FoodMenu[food_idx],
        ...req.body
    };

    res.send("Item successfully updated");
});


// Delete food
app.delete("/admin/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const food_idx = FoodMenu.findIndex(item => item.id === id);

    if (food_idx === -1) {
        return res.status(404).send("Item not found");
    }

    FoodMenu.splice(food_idx, 1);

    res.send("Item successfully deleted");
});


// ======================================================
// USER AUTHENTICATION
// ======================================================

// Every /user route will first go through Auth
app.use("/user", Auth);


// ======================================================
// USER CART ROUTES
// ======================================================


// ADD FOOD TO CART
app.post("/user:id", (req, res) => {

    const id = parseInt(req.params.id);

    // Find food in menu
    const food = FoodMenu.find(item => item.id === id);

    if (!food) {
        return res.status(404).send("Food item not found");
    }

    // Add food to cart
    add_to_cart.push(food);

    res.status(201).send({
        message: "Food added to cart",
        cart: add_to_cart
    });
});


// SHOW CART
app.get("/user", (req, res) => {

    res.status(200).send(add_to_cart);

});


// DELETE FOOD FROM CART
app.delete("/user:id", (req, res) => {

    const id = parseInt(req.params.id);

    const cart_idx = add_to_cart.findIndex(item => item.id === id);

    if (cart_idx === -1) {
        return res.status(404).send("Food item not found in cart");
    }

    add_to_cart.splice(cart_idx, 1);

    res.send({
        message: "Food removed from cart",
        cart: add_to_cart
    });
});


// ======================================================
// SERVER
// ======================================================

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});