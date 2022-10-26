const express = require("express");
require("dotenv").config();
const path = require("path");

const connectDB = require("../config/db");

const configPath = path.join(__dirname, "..", "config", ".env");
require("dotenv").config({ path: configPath });

const app = express();

const PORT = process.env.PORT;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
