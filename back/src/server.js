const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' });
const Movie = require("./models/model");
const movieRoutes = require("./routes/router");

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Configuración de `multer` para subir imágenes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const uploadMiddleware = multer({ storage });

// Rutas
app.use("/api", movieRoutes);

// Ruta para crear películas con imagen
app.post("/api/movies", uploadMiddleware.single('poster'), createMovie);

// Función para crear la película
async function createMovie(req, res) {
    try {
        console.log("📥 Archivo recibido:", req.file); // Log para ver el archivo recibido
        console.log("📋 Datos recibidos:", req.body);  // Log para ver los datos enviados

        const { title, year, director, duration, genre, rate } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: "❌ Se requiere una imagen para el póster" });
        }

        if (!title || !year || !director || !duration || !genre) {
            return res.status(400).json({ message: "❌ Faltan campos obligatorios" });
        }

        const genreArray = Array.isArray(genre) ? genre : JSON.parse(genre || "[]");

        const newMovie = new Movie({
            title,
            year: parseInt(year, 10),
            director,
            duration,
            genre: genreArray,
            rate: parseFloat(rate) || 0,
            poster: `/uploads/${req.file.filename}`
        });

        await newMovie.save();

        res.status(201).json({ message: "✅ Película creada exitosamente", newMovie });
    } catch (error) {
        console.error("❌ Error al crear la película:", error);
        res.status(400).json({ message: "❌ Error al crear la película", error: error.message });
    }
}

module.exports = app;
