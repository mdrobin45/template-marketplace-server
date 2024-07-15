const BestSellingProduct = require("../../schema/bestSellingSchema");

const bestSelling = async (req, res) => {
   try {
      const result = await BestSellingProduct.find().populate("template");
      res.status(200).send(result);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
   }
};

// Export module
module.exports = bestSelling;
