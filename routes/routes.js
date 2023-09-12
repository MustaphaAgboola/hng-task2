const express = require('express');
const router = express.Router()
const {
  postController,
  getController,
  patchController,
  deleteController,
  putController,
} = require("../controller/controller");


router.post("/", postController);
router.get("/:id", getController);
router.put("/:id", putController);
router.patch("/:id", patchController);
router.delete("/:id", deleteController);

module.exports = router