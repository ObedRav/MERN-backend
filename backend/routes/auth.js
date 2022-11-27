const express = require('express');
const router = express.Router();
 
const { singup, signin } = require("../controllers/authController")

router.post('/signup', singup)
router.post('/singin', signin)

module.exports = router;