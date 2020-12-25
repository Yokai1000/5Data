const Etudiant = require('../models/etudiant.model.js');
const plotly = require('plotly')("whoismatt", "6B1jGom1whc3bXVraMKy")

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

exports.getSuccessfullStudent = (req, res) => {
  Etudiant.find()
    .then(etudiants => {
      etudiants.sort((a, b) => (parseFloat(a.General_Mean) < parseFloat(b.General_Mean)) ? 1 : -1)
      res.send(etudiants.slice(0,40));
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'error in the api'
      });
    });
};

// 2 - Who are the students who stop their studies and why
exports.getStoppedStudents = (req,res) => {
  Etudiant.find({
    Interruption_Reason: { $exists: true, $not: {$size: 0}}
  }).then(etudiants => {
    res.send(etudiants);
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'error in the api'
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

exports.getGraphOfSuccessfullStudent = (req, res) => {
    Etudiant.find({}, {Email:1,General_Mean:1})
    .then(etudiants => {
      console.log(etudiants)
    })
}

//get hired student count by year
// exports.CountByYearGroupedByGender = (req, res) => {
//   Etudiant.aggregate([
//     {
//       $group: {
//         _id: {
//           year: {
//             $year: {
//               $dateFromString: {
//                 dateString: '$Hire_Date'
//               }
//             }
//           },
//           gender: '$Gender'
//         },
//         count: { $sum: 1 }
//       }
//     },
//     { $sort: { _id: 1 } }
//   ])
//   .then(group => {
//     res.send(group);
//   })
//   .catch(err => {
//     if (err.kind === 'ObjectId') {
//       return res.status(404).send({
//         message: 'error 404'
//       });
//     }
//     return res.status(500).send({
//       message: 'error 500' + err
//     });
//   });
// };

//get hired student count by year
// exports.CountByYearGroupedByDomain = (req, res) => {
//   Etudiant.aggregate([
//     {
//       $group: {
//         _id: {
//           year: {
//             $year: {
//               $dateFromString: {
//                 dateString: '$Hire_Date'
//               }
//             }
//           },
//           domain: '$Study_Domain'
//         },
//         count: { $sum: 1 }
//       }
//     },
//     { $sort: { _id: 1 } }
//   ])
//   .then(group => {
//     res.send(group);
//   })
//   .catch(err => {
//     if (err.kind === 'ObjectId') {
//       return res.status(404).send({
//         message: 'error 404'
//       });
//     }
//     return res.status(500).send({
//       message: 'error 500' + err
//     });
//   });
// };

