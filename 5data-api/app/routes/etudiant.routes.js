module.exports = app => {
  const etudiants = require('../controllers/etudiant.controller.js');

  // Retrieve all Etudiants
  app.get('/etudiants/get/', etudiants.findAll);

  // Retrieve a single Etudiant with etudiantId
  app.get('/etudiants/get/:etudiantId', etudiants.findOne);

  app.get('/etudiants/success', etudiants.getSuccessfulStudent);

  app.get('/etudiants/CountByYear/Gender', etudiants.CountByYearGroupedByGender);
  app.get('/etudiants/CountByYear/Domain', etudiants.CountByYearGroupedByDomain);
};
