const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createResturantController,
  getResturant,
  resturantId,
  deleteResturantController,
} = require("../controllers/resturantController");

const router = express.Router();

router.post("/create", authMiddleware, createResturantController);
router.get("/getAll", getResturant);
router.get("/get/:id", resturantId);
router.get("/delete/:id", authMiddleware, deleteResturantController);

module.exports = router;
