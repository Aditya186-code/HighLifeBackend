const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    ProductName: {
      type: String,
      required: true,
      trim: true,
    },
    ProductColor: {
      type: String,
      required: true,
      trim: true,
    },

    ProductCategory: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },

    ProductAddedBy: {
      type: ObjectId,
      ref: "Seller",
      required: "true",
    },

    ProductImage: {
      type: String,
      required: true,
      trim: true,
    },
    ProductBrand: {
      type: String,
      trim: true,
    },
    ProductDescription: {
      type: String,
      required: true,
    },
    ProductPrice: {
      type: Number,
      trim: true,
      required: true,
    },

    ProductQuantity: {
      type: Number,
      required: true,
      trim: true,
    },

    ProductSold: {
      type: Number,
      default: 0,
      trim: true,
    },

    ProductSize: {
      type: String,
      trim: true,
    },

    likes: [{ type: ObjectId, ref: "Buyer" }],
    comments: [
      {
        text: String,
        created: { type: Date, default: Date.now },
        postedBy: { type: ObjectId, ref: "Buyer" },
      },
    ],
  },
  { timestamps: true }
);

module.exports = Product = mongoose.model("Product", productSchema);
