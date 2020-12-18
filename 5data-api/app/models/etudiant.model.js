const mongoose = require('mongoose');

const EtudiantSchema = mongoose.Schema(
  {
    ID: Number,
    First_Name: String,
    Last_Name: String,
    Email: String,
    Gender: String,
    Country: String,
    City: String,
    Birth_Date: String,
    Subscription_Date: String,
    Exit_Date: String,
    Hire_Date: String,
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
  { collection: 'students' }
);

module.exports = mongoose.model('Etudiant', EtudiantSchema);
