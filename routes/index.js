const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');
const {isAuthenticated} = require('../config/passportConfig');

// -- Private path's are only accessible when user is authenticated

//Private Path - rendering home page
router.get('/' , isAuthenticated ,homeController.home);

//Sending all user requests to the user's route page
router.use('/users', require('./users'));

//Private Path - products APIs
//Sending all product requests to the product's route page
router.use('/products', isAuthenticated, require('./products'));

//Exporting the default router for the web app
module.exports = router;