const express = require('express');
const router = express.Router();

const { list, create, remove, categoryById } = require('../controllers/categoryController');
const { userById } = require ('../controllers/authController')

router.param('categoryId', categoryById); 
router.param('userId', userById);

router.get('/categories', list);
router.post('/create/:userId', create);
router.delete('/:categoryId/', remove); 

module.exports = router;