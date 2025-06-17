const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  placeOrderController,
  orderStatusController,
} = require("../controllers/orderControllers");
const adminMiddleware = require("../middlewares/adminMiddleware");

const router = express.Router();

router.post("/placeOrder", authMiddleware, placeOrderController);
router.post(
  "/status/:id",
  authMiddleware,
  adminMiddleware,
  orderStatusController
);

module.exports = router;
