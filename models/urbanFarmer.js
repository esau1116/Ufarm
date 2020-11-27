const mongoose=require('mongoose');

const farmerOneSchema= new mongoose.Schema({

    firstName: String,
    surName: String,
    dateOfBirth: String,
    phoneNumber: String,
    nin: String,
    dateOfRegistration: String,
    ward: String,
    activitiesUnderTaken: String
})

module.export=mongoose.model('urbanFarmer', urbanFarmer.Schema);