const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { text } = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "custom",
});

app.listen(3001, () => {
  console.log("Your server is running on port 3001");
});
