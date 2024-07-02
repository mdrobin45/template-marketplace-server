const express = require("express");
const database = require("./database");
const productRoute = require("./routes/product");
require("dotenv").config();

// Initiate app
const app = express();

// Define port
const port = process.env.PORT || 3000;

// JSON support
app.use(express.json());

// Database connection
database();

// Server routes
app.get("/", (req, res) => {
   res.send("Hello");
});
app.use("/product", productRoute);

// Listen server
app.listen(port, () => {
   console.log(`Server running in port ${port}`);
});
