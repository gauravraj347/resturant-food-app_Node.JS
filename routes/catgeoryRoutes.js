const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createCatController,
  getCat,
  updateCategory,
  deleteCat,
} = require("../controllers/categoryController");
authMiddleware;
const router = express.Router();

router.get("/create", authMiddleware, createCatController);
router.get("/getALL", getCat);
router.get("/updateCat/:id", authMiddleware, updateCategory);
router.post("/deleteCat/:id", authMiddleware, deleteCat);

module.exports = router;
