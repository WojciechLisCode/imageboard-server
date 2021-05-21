const express = require("express");
const { Router } = express;

const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res) => {
  const allUsers = await User.findAll();
  res.send(allUsers);
});

router.post("/", async (req, res, next) => {
  try {
    const { email, password, fullName } = req.body;
    const user = await User.create(req.body);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
