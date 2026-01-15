const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ status: "OK", service: "cloud-ci-cd" });
});

app.get("/health", (req, res) => {
  res.status(200).send("healthy");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
