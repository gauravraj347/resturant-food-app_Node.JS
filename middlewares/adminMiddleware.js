const userModel = require("../models/userModel");

module.exports = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.body.id);
    if (user.usertype !== "admin") {
      return res.status(400).send({
        success: false,
        message: "Only amin access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "error in Unotherise",
    });
  }
};
