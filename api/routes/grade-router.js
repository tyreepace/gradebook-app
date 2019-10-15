const express = require('express');
const GradeController = require('../controllers/grade-controller');
const router = express.Router();

router.get('/grades', GradeController.getGrades);

module.exports = router;
