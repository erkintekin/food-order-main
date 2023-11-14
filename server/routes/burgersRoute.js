const express = require("express");
const burgerModel = require("../models/burgerModels");
const router = express.Router();

//http://localhost:4000/api/burgers/getBurgers
router.get("/getBurgers", async (req, res) => {
  const foods = await burgerModel.find();
  res.json(foods);
});

router.post("/deleteBurger", async (req, res) => {
  // const burgerid = req.body.burgerid;
  const { burgerid } = req.body;

  try {
    await burgerModel.findOneAndDelete({ _id: burgerid });
    res.send("Menü silme başarılı");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//edit burger
router.post("/editBurger", async (req, res) => {
  const editedBurger = req.body.editedBurger;

  try {
    const burger = await burgerModel.findOne({ _id: editedBurger._id });

    burger.ad = editedBurger.ad;
    burger.img = editedBurger.img;
    // buraya bir köşeli isteyebilir.
    burger.fiyat = editedBurger.fiyat;
    burger.kategori = editedBurger.kategori;
    burger.desc = editedBurger.desc;

    await burger.save();
    res.send(burger);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// edit'e burger çekme

router.post("/getBurgerById", async (req, res) => {
  const { burgerid } = req.body;
  try {
    const burger = await burgerModel.findOne({ _id: burgerid });
    res.send(burger);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Menü ekleme
router.post("/addBurger", async (req, res) => {
  const menu = req.body.menu;

  try {
    const newMenu = new burgerModel({
      ad: menu.ad,
      ozellik: ["small", "medium", "mega"],
      img: menu.img,
      desc: menu.desc,
      kategori: menu.kategori,
      fiyat: [menu.fiyat],
    });

    await newMenu.save();
    res.send(newMenu);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
module.exports = router;
