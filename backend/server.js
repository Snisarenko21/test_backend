const express = require("express");
require("dotenv").config();
const path = require("path");

const connectDB = require("../config/db");

// app.use(express.json());
// app.post("/', (req, res) => {
//   console.log(req.body);
//   res.status(200).json()
// });
const PORT = process.env.PORT || 5000;
const app = express();

const configPath = path.join(__dirname, "..", "config", ".env");
require("dotenv").config({ path: configPath });
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
