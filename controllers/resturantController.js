const resturantModel = require("../models/resturantModel");

const createResturantController = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      idOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    } = req.body;

    if (!title || !imageUrl) {
      return res.status(404).send({
        success: false,
        message: "provided all Field",
      });
    }

    const newRestruant = await resturantModel.create({
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      idOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    });
    res.status(200).send({
      success: true,
      message: "Resturant create successfull",
      newRestruant,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      message: "Error in create Resturant",
      error,
    });
  }
};

const getResturant = async (req, res) => {
  try {
    const resturants = await resturantModel.find();
    if (!resturants) {
      res.status(404).send("No resturant found");
    }
    res.status(200).send({
      success: true,
      message: "total no of Resturants are : ",
      totalCount: resturants.length,
      resturants,
    });
    //count = resturants.length;
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "SOme error to get Resturant",
    });
  }
};

const resturantId = async (req, res) => {
  try {
    const getRes = await resturantModel.findById(req.params.id);

    if (!getRes) {
      return res.status(400).send({
        success: false,
        message: "Restaurant not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Restaurant found",
      data: getRes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error retrieving restaurant",
      error: error.message || error,
    });
  }
};

const deleteResturantController = async (req, res) => {
  try {
    const deletedResturant = await resturantModel.findByIdAndDelete(
      req.params.id
    );

    if (!deletedResturant) {
      return res.status(404).send({
        success: false,
        message: "Restaurant not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Restaurant deleted successfully",
    });
  } catch (error) {
    console.log("Delete Error:", error);
    res.status(500).send({
      success: false,
      message: "Error deleting restaurant",
      error: error.message || error,
    });
  }
};

module.exports = {
  createResturantController,
  getResturant,
  resturantId,
  deleteResturantController,
};
