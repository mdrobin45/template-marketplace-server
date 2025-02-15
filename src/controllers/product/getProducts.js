const Product = require("../../schema/productSchema");

const getProducts = async (req, res) => {
   try {
      const result = await Product.find();
      res.status(200).send(result);
   } catch {
      res.status(500).json({ error: "Internal Server Error" });
   }
};

// Export module
module.exports = getProducts;
