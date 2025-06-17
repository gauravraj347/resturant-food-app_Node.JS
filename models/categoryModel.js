const mongoose = require("mongoose");
const categorySchmea = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "categroy title is required"],
    },
    imageUrl: {
      type: String,
      default:
        "https://www.istockphoto.com/photo/thanksgiving-turkey-gm471643781-25891060?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbannerNone_media&utm_term=food+profile",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchmea);
