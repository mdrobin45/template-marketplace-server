const Product = require("../../schema/product");

const insertProduct = async (req, res) => {
   try {
      const productInfo = req.body;
      const result = await Product(productInfo).save();
      res.status(200).json({ message: "Product inserted", id: result._Id });
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
   }
};

// Export module
module.exports = insertProduct;
