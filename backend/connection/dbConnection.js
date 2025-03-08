const mongoose = require("mongoose");
const mongoConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/quantum")
    .then(() => {
      console.log("connected");
    })
    .catch((error) => {
      console.log(error, "not connected");
    });
};
module.exports = mongoConnection;
