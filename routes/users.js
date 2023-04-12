const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

//For Showing Sign-up page on get request
router.get("/sign-up", userController.showSignUpPage);

//For Showing Sign-in page on get request
router.get("/sign-in", userController.showSignInPage);

//For Registering / signing-up the user
router.post("/sign-up", userController.signUp);

//For Sign-in the user
router.post("/sign-in", userController.signIn);

//For logging out the user
router.get("/logout", userController.logout);

module.exports = router;
