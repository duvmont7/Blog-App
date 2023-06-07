const authController = require('./../controllers/auth.controller');
const express = require('express');

const router = express.Router();

//crear una route post con nombre /signup -> signup
router.post('/signup', authController.signup);

// crear una ruta post con nombre /login -> login
router.post('/login', authController.login);

module.exports = router;
