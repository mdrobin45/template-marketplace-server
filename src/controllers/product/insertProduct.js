const Product = require("../../schema/productSchema");

const insertProduct = async (req, res) => {
   try {
      const productInfo = req.body;
      const result = await Product(productInfo).save();
      res.status(200).json({ message: "Product inserted", id: result._Id });
   } catch {
      res.status(500).json({ error: "Internal Server Error" });
   }
};

// Export module
module.exports = insertProduct;
