const express = require("express");
const database = require("./database");
const productRoute = require("./routes/product");
const cors = require("cors");
const authorRouter = require("./routes/author");
require("dotenv").config();

// Initiate app
const app = express();

// Define port
const port = process.env.PORT || 3000;

// JSON support
app.use(express.json());

// Cors origin support
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));

// Database connection
database();

// Server routes
app.get("/", (req, res) => {
   res.send("Hello");
});
app.use("/product", productRoute);
app.use("/author", authorRouter);

// Listen server
app.listen(port, () => {
   console.log(`Server running in port ${port}`);
});
