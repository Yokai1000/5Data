module.exports = app => {
  const etudiants = require('../controllers/etudiant.controller.js');

  // Retrieve all Etudiants
  app.get('/etudiants/get/', etudiants.findAll);

  // Retrieve a single Etudiant with etudiantId
  app.get('/etudiants/get/:etudiantId', etudiants.findOne);

  app.get('/etudiants/success', etudiants.getSuccessfullStudent);

  // app.get('/etudiants/success/graph', etudiants.getGraphOfSuccessfullStudent);
  app.get('/etudiants/stopped', etudiants.getStoppedStudents);

  app.get('/etudiants/region', etudiants.findAll);

  // app.get('/etudiants/CountByYear/Domain', etudiants.CountByYearGroupedByDomain);
};
