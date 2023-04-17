const mongoose = require("mongoose");

//For connecting to the database - mongodb
exports.connectMongoose = () => {
  const databaseURL = "mongodb+srv://kevalradadiya72020:Keval%401234@cluster0.mkqreqi.mongodb.net/?retryWrites=true&w=majority";

  mongoose
    .connect(databaseURL)
    .then((e) => console.log(`Connect to mongoDB:${e.connection.host}`))
    .catch(error => console.log(`Error while conneting to Database - ${error}`))
};