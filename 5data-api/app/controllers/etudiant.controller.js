const Etudiant = require('../models/etudiant.model.js');

// Retrieve and return all etudiants from the database.
exports.findAll = (req, res) => {
  Etudiant.find()
    .then(etudiants => {
      res.send(etudiants);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'error in the api'
      });
    });
};

exports.getSuccessfulStudent = (req, res) => {
  Etudiant.find()
    .then(etudiants => {
      etudiants.sort((a, b) => (parseFloat(a.General_Mean) < parseFloat(b.General_Mean)) ? 1 : -1)
      res.send(etudiants.slice(0,20));
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'error in the api'
      });
    });
};

// Find a single etudiant with a etudiantId
exports.findOne = (req, res) => {
  Etudiant.findById(req.params.etudiantId)
    .then(etudiant => {
      if (!etudiant) {
        return res.status(404).send({
          message: 'error in the api'
        });
      }
      res.send(etudiant);
    })
    .catch(err => {
      return res.status(500).send({
        message: 'error in the api'
      });
    });
};

//get hired student count by year
exports.CountByYearGroupedByGender = (req, res) => {
  Etudiant.aggregate([
    {
      $group: {
        _id: {
          year: {
            $year: {
              $dateFromString: {
                dateString: '$Hire_Date'
              }
            }
          },
          gender: '$Gender'
        },
        count: { $sum: 1 }
      }
    },
    { $sort: { _id: 1 } }
  ])
  .then(group => {
    res.send(group);
  })
  .catch(err => {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: 'error 404'
      });
    }
    return res.status(500).send({
      message: 'error 500' + err
    });
  });
};

//get hired student count by year
exports.CountByYearGroupedByDomain = (req, res) => {
  Etudiant.aggregate([
    {
      $group: {
        _id: {
          year: {
            $year: {
              $dateFromString: {
                dateString: '$Hire_Date'
              }
            }
          },
          domain: '$Study_Domain'
        },
        count: { $sum: 1 }
      }
    },
    { $sort: { _id: 1 } }
  ])
  .then(group => {
    res.send(group);
  })
  .catch(err => {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: 'error 404'
      });
    }
    return res.status(500).send({
      message: 'error 500' + err
    });
  });
};

