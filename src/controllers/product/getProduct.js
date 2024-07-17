const Product = require("../../schema/productSchema");

const getProduct = async (req, res) => {
   try {
      const { id } = req.query;
      const result = await Product.findById(id).populate("templateAuthor");
      res.status(200).send(result);
   } catch {
      res.status(500).json({ error: "Internal Server Error" });
   }
};

// Export module
module.exports = getProduct;
