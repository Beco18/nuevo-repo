const Movie = require("../models/model");

class MovieServices {
    
    async createMovie(movieData) {
        try {
            const newMovie = new Movie(movieData);
            await newMovie.save();
            return newMovie;
        } catch (error) {
            console.error("❌ Error al crear la película:", error.message);
            throw new Error("Error al crear la película");
        }
    }

    async deleteMovie(objectId) {
        try {
            const deletedMovie = await Movie.findByIdAndDelete(objectId);
            if (!deletedMovie) {
                throw new Error("Película no encontrada");
            }
            return deletedMovie;
        } catch (error) {
            console.error("❌ Error al eliminar la película:", error.message);
            throw new Error(error.message || "Error interno");
        }
    }
}

module.exports = new MovieServices();
