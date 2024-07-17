const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
   {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      country: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      city: { type: String, required: true },
      avatar: { type: String, required: true },
      description: { type: String, required: true },
      rule: { type: String, required: true },
      socialLinks: [
         {
            title: { type: String },
            url: { type: String },
         },
      ],
      templates: [
         {
            type: mongoose.Schema.ObjectId,
            ref: "Product",
         },
      ],
      earnings: [
         {
            funds: { type: Number, default: 0 },
            paymentDate: { type: Date, default: Date.now() },
         },
      ],
   },
   { timestamps: true }
);

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
