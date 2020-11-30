const mongoose = require("mongoose");

const farmerOneSchema = new mongoose.Schema({
  firstName: String,
  surName: String,
  dateOfBirth: String,
  userNumber: String,
  nin: String,
  dateOfRegistration: String,
  residence: String,  
  directionsToResidence: String,
}); 
//Associating the schema with the collection name.
module.exports = mongoose.model("FarmerOne", farmerOneSchema);
