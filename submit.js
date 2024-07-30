import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
let comments = [];

app.get("/", (req, res) => {
  res.render("index", { comments: comments });
});

app.post("/submit", (req, res) => {
  const textBoxValue = req.body.textBox;
  if (textBoxValue) {
    comments.push(textBoxValue);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:3000");
});
