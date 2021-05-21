const express = require("express");
const { Router } = express;

const Image = require("../models/").image;

const router = new Router();

router.get("/", async (req, res) => {
  const allImages = await Image.findAll();
  res.send(allImages);
});

router.get("/image/:id", async (req, res) => {
  const image = await Image.findByPk(req.params.id);
  console.log(req.params.id);
  res.send(image);
});

router.post("/", async (req, res, next) => {
  try {
    const { title, url } = req.body;
    const image = await Image.create(req.body);
    res.json(image);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
