const express = require('express');
const StudentController = require('../controllers/student-controller');
const router = express.Router();

router.get('/students', StudentController.getStudents);

module.exports = router;
