const Product = require("../../schema/product");

const getProducts = async (req, res) => {
   try {
      const result = await Product.find();
      res.status(200).send(result);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
   }
};

// Export module
module.exports = getProducts;
