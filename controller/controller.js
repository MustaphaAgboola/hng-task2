const NameModel = require("../models/nameSchema");

const postController = async (request, response) => {
  const { name } = request.body;
  const Name = await new NameModel({
    name,
  });
  Name.save();

  response.status(200).send({
    responseCode: 200,
    responseMessage: "Succesfull",
  });
};

const getController = async (request, response) => {
  const { name } = request.body;
  try {
    let user = await NameModel.findOne({
      name,
    });
    if (!user) {
      response.status(404).json({
        responseCode: 404,
        responseMessage: "name not found",
      });
    } else {
      response.send({
        user,
      });
    }
  } catch (error) {
    console.log(error);
  }
};


const patchController = async (request, response) => {
  const userId = request.params._id;
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
   const userId = request.params._id;
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
     response.status(500).json({ error: "Error updating user" });
   }
 };

module.exports = {
  postController, getController, patchController, deleteController
};
