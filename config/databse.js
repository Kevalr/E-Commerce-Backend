const mongoose = require("mongoose");

//For connecting to the database - mongodb
exports.connectMongoose = () => {
  const databaseURL = "mongodb://127.0.0.1:27017/e-commerce";

  mongoose
    .connect(databaseURL)
    .then((e) => console.log(`Connect to mongoDB:${e.connection.host}`))
    .catch(error => console.log(`Error while conneting to Database - ${error}`))
};
