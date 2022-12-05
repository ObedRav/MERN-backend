const express = require('express');
const router = express.Router();

const { create, list, remove, gameById, photo, read } = require("../controllers/gamesController")

router.get('/videogames', list); 
router.post('/create', create);
router.get('/photo/:videogameId', photo)
router.get('/:videogameId', read);
router.delete('/:videogameId', remove)

router.param("videogameId", gameById);

module.exports = router;