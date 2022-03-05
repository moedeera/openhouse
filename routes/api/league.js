const express = require("express");
var cors = require("cors");
const { Router } = require("express");
const router = express.Router();

const League = {
  teams: [
    { id: 1, name: "North" },
    { id: 2, name: "West" },
    { id: 3, name: "South" },
    { id: 4, name: "East" },
  ],
  standings: [1, 2, 3, 4],
};

router.get("/", async (req, res) => {
  res.send(League);
});
module.exports = router;
