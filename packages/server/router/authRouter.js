const express = require('express');
const validateForm = require('../controllers/validateForm');
const router = express.Router();
const {handleLogin, attemptLogin} = require('../controllers/authController');



router.route("/login")
  .get(handleLogin)
  .post( validateForm,attemptLogin);

router.post("/register", validateForm,)

module.exports = router;