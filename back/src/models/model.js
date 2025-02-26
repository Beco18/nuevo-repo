const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    director: { type: String, required: true },
    duration: { type: String, required: true },
    genre: { type: [String], required: true }, // Se espera un array de strings
    rate: { type: Number, default: 0 }, // Valor por defecto si no se proporciona
    poster: { type: String, required: true } // Ruta de la imagen
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
