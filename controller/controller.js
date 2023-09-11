const NameModel = require("../models/nameSchema");

const postController = async (request, response) => {
  const { name } = request.body;
  const Name = new NameModel({
    name,
  });
  await Name.save();

  response.status(200).send({
    responseCode: 200,
    responseMessage: "Succesfull",
    data: Name,
  });
};

const getController = async (request, response) => {
  const userId = request.params.id;
  try {
    let user = await NameModel.findById(userId);
    if (!user) {
      response.status(404).json({
        responseCode: 404,
        responseMessage: "user not found",
      });
    } else {
      response.send({
        user,
      });
    }
  } catch (error) {
    console.log(error);
    response.status(404).json({
      responseCode: 404,
      responseMessage: "user not found",
    });
  }
};

const putController = async (request, response) => {
  const userId = request.params.id;
  const newName = request.body;

  try {
    const user = await NameModel.findByIdAndUpdate(
      userId,
      { $set: newName },
      { new: true }
    );
    if (!user) {
      response.status(404).json({
        responseCode: 404,
        responseMessage: "Not found",
      });
    }
    response.status(200).json({
      responseCode: 200,
      responseMessage: 'Updated Succesfully',
      data: user
    });
  } catch (error) {
    console.log(`Error updating user: ${error}`);
    response.status(500).json({ error: "Error updating user" });
  }
};

const patchController = async (request, response) => {
  const userId = request.params.id;
  const newName = request.body;

  try {
    const user = await NameModel.findByIdAndUpdate(
      userId,
      { $set: newName },
      { new: true }
    );
    if (!user) {
      response.status(404).json({
        responseCode: 404,
        responseMessage: "Not found",
      });
    }
    response.status(200).json(user);
  } catch (error) {
    console.log(`Error updating user: ${error}`);
    response.status(500).json({ error: "Error updating user" });
  }
};

const deleteController = async (request, response) => {
  const userId = request.params.id;
  const newName = request.body;

  try {
    const user = await NameModel.findByIdAndDelete(userId);
    if (!user) {
      response.status(404).json({
        responseCode: 404,
        responseMessage: "Not found",
      });
    }
    response.status(200).json({
      responseCode: 200,
      responseMessage: "User deleted succesfully",
    });
  } catch (error) {
    console.log(`Error updating user: ${error}`);
    response.status(500).json({ error: "Error deleting user" });
  }
};

module.exports = {
  postController,
  getController,
  patchController,
  deleteController,
  putController,
};
