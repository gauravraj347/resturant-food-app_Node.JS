const foodModel = require("../models/foodModel");

const foodController = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvaliable,
      resturant,
      rating,
      ratingCount,
    } = req.body;
    if (!title || !description || !price) {
      return res.status(500).send({
        success: false,
        message: "Required title description and price",
      });
    }

    const newfood = await foodModel.create({
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvaliable,
      resturant,
      rating,
      ratingCount,
    });
    res.status(200).send({
      success: true,
      message: "Food create successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In food controller",
    });
  }
};

const getAllController = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    if (!foods) {
      return res.status(500).send({
        success: false,
        message: "Not food items found",
      });
    }
    res.status(200).send({
      success: true,
      message: "food found",
      totalFoods: foods.length,
      foods,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      message: "Error in getallfood",
    });
  }
};

const getFoodById = async (req, res) => {
  try {
    const id = req.params.id;
    const food = await foodModel.findById(id);
    if (!food) {
      return res.status(500).send({
        success: false,
      });
    }
    res.status(200).send({
      success: true,
      message: "found food",
      food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in GetFood yb Id",
    });
  }
};

const foodByRes = async (req, res) => {
  try {
    const resturantId = req.params.id;
    const food = await foodModel.find({ resturant: resturantId });
    res.status(200).send({
      success: true,
      message: "food found in resturant",
      food,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "ERRror in restuant by id",
    });
  }
};

const updateFood = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvaliable,
      resturant,
      rating,
      ratingCount,
    } = req.body;
    const foodid = await foodModel.findById(id);
    const updatefoods = await foodModel.findByIdAndUpdate(
      foodid,
      {
        title,
        description,
        price,
        imageUrl,
        foodTags,
        category,
        code,
        isAvaliable,
        resturant,
        rating,
        ratingCount,
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      Message: "Update food item successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Updatafood API",
    });
  }
};

const deleteFoodController = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteId = await foodModel.findById(id);
    if (!deleteId) {
      return res.status(500).send({
        success: false,
        message: "Not found in ID",
      });
    }

    await foodModel.findByIdAndDelete(deleteId);
    res.status(200).send({
      success: true,
      message: "food item delete successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "Error in delete food ",
    });
  }
};
module.exports = {
  foodController,
  getAllController,
  getFoodById,
  foodByRes,
  updateFood,
  deleteFoodController,
};
