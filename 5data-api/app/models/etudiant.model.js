const mongoose = require('mongoose');

const EtudiantSchema = mongoose.Schema(
  {
    Id: Number,
    First_Name: String,
    Last_Name: String,
    Email: String,
    Gender: String,
    Country: String,
    City: String,
    Birth_Date: Date,
    Origin_Region: String,
    Origin_School: String,
    Subscription_Date: Date,
    Exit_Date: Date,
    Hire_Date: Date,
    Study_Domain: String,
    Mobility: String,
    General_Mean: Number,
    Interruption_Reason: String,
    Graduation: Boolean,
    Presence: String,
    Internship_Pro: String,
    Contract_Type: String,
    Recrutment_Nbr: Number,
    Mail_Supinfo: String,
    Recrutment_Salon: Boolean
  },
  { collection: 'etudiant' }
);

module.exports = mongoose.model('Etudiant', EtudiantSchema);
