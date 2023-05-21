const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { text } = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  })
);

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
  user: process.env.RDS_USERNAME,
  host: process.env.RDS_HOSTNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  port: process.env.RDS_PORT,
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/addCustomer", (req, res) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "http://khizar-cleaning-services.s3-website-us-east-1.amazonaws.com"
  );

  console.log("Add customer is called");

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
        res.send(err);
      } else {
        res.send("Record inserted Successfully!");
      }
    }
  );

  res.send("Customer called");
});

app.post("/addOrder", (req, res) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "http://khizar-cleaning-services.s3-website-us-east-1.amazonaws.com"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  console.log("Add Order is called");

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
        res.send(err);
      } else {
        res.send("Record inserted Successfully!");
      }
    }
  );

  res.send("Order called");
});

app.listen(PORT, () => {
  console.log("Your server is running on port 3001");
});
