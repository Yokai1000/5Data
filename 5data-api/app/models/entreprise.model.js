const mongoose = require('mongoose')

const EntrepriseSchema = mongoose.Schema(
    {
        Company_Name: String,
        Address: String,
        CA: String,
        Nb_Employees: Number,
        Supinfo_Employees: Number,
        Supinfo_intern: Number
    },
    { collection: 'entreprise' } 
);

module.exports = mongoose.model('Entreprise', EntrepriseSchema);