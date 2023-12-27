const customer = require("../models/customerData");

exports.getData = (req, res, next) => {
  res.json({
    message: "Hello from personal info",
  });
};

exports.postData = (req, res, next) => {
  console.log("add Customer called");
  console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const streetAddress = req.body.streetAddress;
  const city = req.body.city;
  const state = req.body.state;
  const zipCode = req.body.zipCode;
  const phoneNo = req.body.phoneNo;

  customer
    .findOne({ where: { email: email } })
    .then((cust) => {
      if (!cust) {
        customer
          .create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            streetAddress: streetAddress,
            city: city,
            state: state,
            zipCode: zipCode,
            phoneNo: phoneNo,
          })
          .then((result) => {
            return res.json({
              id: result.dataValues.id,
              message: "Customer data added successfully",
            });
          });
      } else {
        return res.json({
          id: cust.dataValues.id,
          message: "Customer record exists",
        });
      }
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });

  // console.log(city);
  // console.log(state);
  // console.log(zipCode);
};
