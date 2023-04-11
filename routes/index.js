const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');

//Middleware
router.get('/', homeController.home);

module.exports = router;