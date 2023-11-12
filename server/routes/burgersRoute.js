const express = require("express");
const burgerModel = require("../models/burgerModels");
const router = express.Router();

router.get("/getBurgers", async (req, res) => {
  const foods = await burgerModel.find();
  res.json(foods);
});
module.exports = router;
