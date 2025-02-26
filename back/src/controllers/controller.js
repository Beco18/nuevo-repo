const movieModels = require("../models/model");
const mongoose = require('mongoose');

const movies = async (req, res) => {
    try {
        const allMovies = await movieModels.find();
        console.log("📢 Películas obtenidas desde MongoDB:", allMovies);
        res.json(allMovies);
    } catch (error) {
        console.error("❌ Error al obtener las películas:", error);
        res.status(500).json({ message: "❌ Error al obtener las películas" });
    }
};

async function createMovie(req, res) {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    try {
        if (!title || !year || !director || !duration || !genre || !rate) {
            return res.status(400).json({ message: "❌ Faltan campos obligatorios" });
        }

        const newMovie = new movieModels({
            title,
            year,
            director,
            duration,
            genre,
            rate,
            poster: poster || null
        });

        await newMovie.save();
        res.status(201).json({ message: "✅ Película creada exitosamente", newMovie });
    } catch (error) {
        console.error("❌ Error al crear la película:", error);
        res.status(400).json({ message: "❌ Error al crear la película", error: error.message });
    }
}

async function deleteMovie(req, res) {
    const { id } = req.params;
    const objectId = new mongoose.Types.ObjectId(id);

    try {
        const deletedMovie = await movieModels.findByIdAndDelete(objectId);
        if (!deletedMovie) {
            return res.status(404).json({ message: "❌ Película no encontrada" });
        }
        res.json({ message: "✅ Película eliminada", deletedMovie });
    } catch (error) {
        console.error("❌ Error al eliminar la película:", error);
        res.status(500).json({ message: "❌ Error al eliminar la película" });
    }
}

module.exports = { movies, createMovie, deleteMovie };
