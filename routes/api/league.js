const express = require("express");
var cors = require("cors");
const { Router } = require("express");
const router = express.Router();
var {DataBase} = require ("./DataBase")


router.get("/", async (req, res) => {
  res.send(DataBase);
});
module.exports = router;
