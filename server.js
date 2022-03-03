// Hello world
const express = require("express");
const app = express();
const PORT = process.env.PORT || 9750;
const path = require("path");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(` app listening on port ${PORT}`);
});
