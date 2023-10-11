const express = require("express");
const router = express.Router();
const Product = require("../Product.model.js");
// const upload = require("../multer.config.js");
const multer = require("multer");

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
router.post("/", upload.array("image", 5), async (req, res, next) => {
  console.log("req.body: ", req.body);
});

router.get("/:id", (req, res, next) => {
  res.send("gett a single product");
});

router.delete("/:id", (req, res, next) => {
  res.send("Delete a product");
});
router.patch("/:id", (req, res, next) => {
  res.send("Update a product");
});
module.exports = router;
