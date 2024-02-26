const order = require("../models/orderData");
const customer = require("../models/customerData");
exports.getData = (req, res, next) => {
  order
    .findAll({
      include: [
        {
          model: customer,
          required: true,
        },
      ],
    })
    .then((result) => {
      //console.log(result);
      return res.json({
        message: "Hello from cleaning info",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
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
      orderStatus: "Created",
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

exports.changeOrder = (req, res, next) => {
  const { id } = req.params;
  const totalBedrooms = req.body.totalBedrooms;
  const totalBathrooms = req.body.totalBathrooms;
  const totalLivingrooms = req.body.totalLivingrooms;
  const totalKitchens = req.body.totalKitchens;
  const appointmentDate = req.body.appointmentDate;
  const appointmentTime = req.body.appointmentTime;
  const totalCost = req.body.totalCost;
  const orderStatus = req.body.orderStatus;

  order
    .findByPk(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json("Not Found");
      }

      let values = {
        noOfBedrooms: parseInt(totalBedrooms),
        noOfBathrooms: parseInt(totalBathrooms),
        noOfLivingrooms: parseInt(totalLivingrooms),
        noOfKitchens: parseInt(totalKitchens),
        appointmentDate: appointmentDate,
        appointmentTime: appointmentTime,
        totalCost: totalCost,
        orderStatus: orderStatus,
      };

      //result.dataValues.noOfBedrooms = parseInt(totalBedrooms);

      return result.update(values).then((updatedResult) => {
        console.log("updatedResult", updatedResult);
      });
      //return result.save();
      // console.log(result.dataValues);
    })
    .then((data) => {
      console.log("Changed");
      res.status(200).json("Changed");
    })
    .catch((err) => {
      console.log(err);
    });
};
