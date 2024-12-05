const express = require('express');
const { Router } = require("express");
const movies = require("./controllers/index")


const app = express();
const router = Router();

router.get("/movies", movies.getMovies)

app.use(router);



module.exports = app;

