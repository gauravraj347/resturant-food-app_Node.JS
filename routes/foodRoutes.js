const express = require("express");
const {
  foodController,
  getAllController,
  getFoodById,
  foodByRes,
  updateFood,
  deleteFoodController,
} = require("../controllers/foodController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, foodController);
router.get("/getAll", getAllController);
router.get("/getById/:id", getFoodById);
router.get("/getByres/:id", foodByRes);
router.put("/updatefood/:id", authMiddleware, updateFood);
router.delete("/deleteFood/:id", authMiddleware, deleteFoodController);

module.exports = router;
