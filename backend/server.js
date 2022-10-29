const express = require("express");
require("dotenv").config();
const path = require("path");
require("colors");

const connectDB = require("../config/db");

const PORT = process.env.PORT || 5000;
const app = express();

const configPath = path.join(__dirname, "..", "config", ".env");
require("dotenv").config({ path: configPath });
connectDB();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

// set tamplete engine
const { engine } = require("express-handlebars");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./backend/views");

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
const sendEmail = require("./servises/sendEmail");

app.post("/send", (req, res) => {
  sendEmail(req.body);

  res.render("send", { name: req.body.userName, email: req.body.userEmail });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
