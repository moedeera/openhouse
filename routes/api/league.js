const express = require("express");
var cors = require("cors");
const { Router } = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("hello");
});
module.exports = router;
