const express = require("express");
const app = express();

const modules = require("./modules");

const port = process.env.PORT || 8000;
app.use(express.json());
app.use("/", (req, res) => {
  res.status(200).send(modules);
});

app.listen(port, () => {
  console.log("Server is live on port: " + port);
});
