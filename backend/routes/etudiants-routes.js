const express = require("express");

const controleursEtudiants = require("../controllers/etudiants-controlleurs")
const router = express.Router();


router.post('/inscription', controleursEtudiants.inscription);

router.post('/connexion', controleursEtudiants.connexion);

router.patch("/modifier/:etudiantId", controleursEtudiants.updateEtudiant);

module.exports = router;