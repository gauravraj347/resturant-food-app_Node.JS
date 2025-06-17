const categoryModel = require("../models/categoryModel");

const createCatController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;

    if (!title) {
      return res.status(400).send({
        success: false,
        message: "please provied category title",
      });
    }
    const newCategory = await categoryModel.create({ title, imageUrl });
    res.status(200).send({
      success: true,
      message: "category create successfully",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error to create Cat API",
    });
  }
};

const getCat = async (req, res) => {
  try {
    const getcategory = await categoryModel.find();
    if (!getcategory) {
      return res.status(400).send({
        success: false,
        message: "Not getcategory found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Category found",
      totalCount: getcategory.length,
      getcategory,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error to Category",
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, imageUrl } = req.body;

    const categories = await categoryModel.findByIdAndUpdate(
      id,
      { title, imageUrl },
      { new: true }
    );

    if (!categories) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "update successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in updateCategory",
    });
  }
};

const deleteCat = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteC = await categoryModel.findById(id);

    if (!deleteC) {
      return res.status(400).send({
        success: false,
        message: "Category not found",
      });
    }

    await categoryModel.findByIdAndDelete(id);

    res.status(200).send({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in delete",
      error,
    });
  }
};

module.exports = { createCatController, getCat, updateCategory, deleteCat };
