const express = require('express');
const router = express.Router();
 
const { singup, signin, signout } = require("../controllers/authController")

router.post('/signup', singup)
router.post('/signin', signin)
router.post('/signout', signout)

module.exports = router;