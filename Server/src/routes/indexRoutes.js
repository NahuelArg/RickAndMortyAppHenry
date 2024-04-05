const getCharbyId = require("../controllers/getCharById");
const deleteFav = require('../controllers/handleFavorites/deleteFav');
const postFav = require('../controllers/handleFavorites/postFav');
const login = require('../controllers/login');
const postUser = require('../controllers/postUser')
const express = require("express");
const router = express.Router();
router.get("/character/:id",getCharbyId);
router.get('/login', login); 
router.post('/login', postUser);
router.post("/fav", postFav); 
router.delete("/fav/:id", deleteFav);
module.exports = router;
