const express = require("express");
const insertProduct = require("../controllers/product/insertProduct");
const getProducts = require("../controllers/product/getProducts");
const productRoute = express.Router();

// Get all products
productRoute.get("/", getProducts);

// Insert product
productRoute.post("/insert", insertProduct);

// Export route
module.exports = productRoute;
