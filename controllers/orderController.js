const order = require("../models/orderData");

exports.getData = (req, res, next) => {
  res.json({
    message: "Hello from cleaning info",
  });
};

exports.postData = (req, res, next) => {
  const totalBedrooms = req.body.totalBedrooms;
  const totalBathrooms = req.body.totalBathrooms;
  const totalLivingrooms = req.body.totalLivingrooms;
  const totalKitchens = req.body.totalKitchens;
  const appointmentDate = req.body.appointmentDate;
  const appointmentTime = req.body.appointmentTime;
  const totalCost = req.body.totalCost;
  const customerId = req.body.customerId;

  order
    .create({
      noOfBedrooms: totalBedrooms,
      noOfBathrooms: totalBathrooms,
      noOfLivingrooms: totalLivingrooms,
      noOfKitchens: totalKitchens,
      appointmentDate: appointmentDate,
      appointmentTime: appointmentTime,
      totalCost: totalCost,
      customerId: customerId,
    })
    .then((result) => {
      return res.json({
        message: "Order data added successfully!",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
