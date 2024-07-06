const express = require("express");
const insertProduct = require("../controllers/product/insertProduct");
const getProducts = require("../controllers/product/getProducts");
const filterByCategory = require("../controllers/product/filterByCategory");
const productRoute = express.Router();

// Get all products
productRoute.get("/", getProducts);

// Filter by category
productRoute.get("/filter", filterByCategory);

// Insert product
productRoute.post("/insert", insertProduct);

// Export route
module.exports = productRoute;
