const express = require('express');
const router = express.Router();
const movieController = require('../controllers/Controller');
const {validateMovie}=require('../middleware/middleware');

//route to import movies
router.post('/import',movieController.importMovies);

//route to get all movies
router.get('/',movieController.getMovies);

//Route to get a single movie by id
router.get('/:id',movieController.getMovieById);

//Route to update a movie by id
router.put('/update/:id', validateMovie,movieController.updateMovie);
