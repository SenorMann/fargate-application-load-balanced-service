import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "What it do, baybee!!!" });
});

app.route("*").all((_req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(8080);
