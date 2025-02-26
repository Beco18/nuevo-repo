const express = require("express");
const router = express.Router();
const {movies, createMovie, deleteMovie} = require("../controllers/controller");
 
const { validateMovieData } = require('../middleware');

router.use(express.json());

router.get("/movies", movies);

router.post("/movies",validateMovieData, createMovie); 
router.delete("/movies/:id", deleteMovie);


module.exports = router;
