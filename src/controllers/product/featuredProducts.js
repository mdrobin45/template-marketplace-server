const FeaturedProducts = require("../../schema/featuredProductSchema");

const featuredProducts = async (req, res) => {
   try {
      const result = await FeaturedProducts.find().populate("template");
      res.status(200).send(result);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
   }
};

// Export module
module.exports = featuredProducts;
