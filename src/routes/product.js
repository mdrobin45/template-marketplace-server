const express = require("express");
const insertProduct = require("../controllers/product/insertProduct");
const getProducts = require("../controllers/product/getProducts");
const filterByCategory = require("../controllers/product/filterByCategory");
const featuredProducts = require("../controllers/product/featuredProducts");
const insertFeatured = require("../controllers/product/insertFeatured");
const bestSelling = require("../controllers/product/bestSelling");
const insertBestSellingProduct = require("../controllers/product/insertBestSellingProduct");
const getProduct = require("../controllers/product/getProduct");
const productRoute = express.Router();

// Get single product
productRoute.get("/", getProduct);

// Get all products
productRoute.get("/", getProducts);

// Filter by category
productRoute.get("/filter", filterByCategory);

// Featured products
productRoute.get("/featured", featuredProducts);

// Get Best selling products
productRoute.get("/best-selling", bestSelling);

// Insert feature product id
productRoute.post("/best-selling", insertBestSellingProduct);

// Insert feature product id
productRoute.post("/featured", insertFeatured);

// Insert product
productRoute.post("/", insertProduct);

// Export route
module.exports = productRoute;
