const express = require("express");
const app = express();

const port = process.env.PORT || 8000;

app.use("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is live on port: " + (process.env.PORT || 5000));
});
