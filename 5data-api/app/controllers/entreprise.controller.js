const Entreprise = require('../models/entreprise.model.js');


// getEmployees()
exports.findNbEmployees = (req, res) => {
    Entreprise.find({
        Nb_Employees
    })
      .then(employeesNumber => {
        res.send(entreprise);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || 'error in the api'
        });
      });
  };

  // getSupinfoEmployees()
exports.findNbSupinfoEmployees = (req, res) => {
    Entreprise.find({
        Supinfo_Employees
    })
      .then(supinfoEmployeesNumber => {
        res.send(supinfoEmployeesNumber);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || 'error in the api'
        });
      });
  };
