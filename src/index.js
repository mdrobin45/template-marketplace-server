const express = require("express");
const database = require("./database");
require("dotenv").config();

// Initiate app
const app = express();

// Define port
const port = process.env.PORT || 3000;

// Database connection
database();

// Server routes
app.get("/", (req, res) => {
   res.send("Hello");
});

// Listen server
app.listen(port, () => {
   console.log(`Server running in port ${port}`);
});
