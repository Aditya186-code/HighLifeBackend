const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ["men", "women", "kids", "accessories"],
      required: true,
      trim: true,
      maxlength: 32,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = Category = mongoose.model("Category", CategorySchema);
