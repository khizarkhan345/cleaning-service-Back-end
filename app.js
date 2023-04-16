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
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

app.post("/addCustomer", (req, res) => {
  const customerId = req.body.customerId;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const streetAddress = req.body.streetAddress;
  const city = req.body.city;
  const state = req.body.state;
  const zipCode = req.body.zipCode;
  const phoneNo = req.body.phoneNo;

  db.query(
    "INSERT INTO customers (customerId, firstName, lastName, email, streetAddress, city, state, zipCode, phoneNo) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      customerId,
      firstName,
      lastName,
      email,
      streetAddress,
      city,
      state,
      zipCode,
      phoneNo,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Record inserted Successfully!");
      }
    }
  );
});

app.post("/addOrder", (req, res) => {
  const orderId = req.body.orderId;
  const totalBedrooms = req.body.totalBedrooms;
  const totalBathrooms = req.body.totalBathrooms;
  const totalLivingrooms = req.body.totalLivingrooms;
  const totalKitchens = req.body.totalKitchens;
  const appointmentDate = req.body.appointmentDate;
  const appointmentTime = req.body.appointmentTime;
  const totalPrice = req.body.totalPrice;
  const customerId = req.body.customerId;

  db.query(
    "INSERT INTO orders (orderId, totalBedrooms, totalBathrooms, totalLivingrooms, totalKitchens, appointmentDate, appointmentTime, totalPrice, customerId) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      orderId,
      totalBedrooms,
      totalBathrooms,
      totalLivingrooms,
      totalKitchens,
      appointmentDate,
      appointmentTime,
      totalPrice,
      customerId,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Record inserted Successfully!");
      }
    }
  );
});

app.listen(8080, () => {
  console.log("Your server is running on port 3001");
});
