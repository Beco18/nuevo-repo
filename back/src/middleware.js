function validateMovieData(req, res, next) {
    const { title, year, director, duration, genre, rate } = req.body;
  
    if (!title || !year || !director || !duration || !genre || !rate) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
  
    // Validar que el año sea un número de 4 dígitos
    if (year.toString().length !== 4) {
      return res.status(400).json({ message: 'El año debe ser un número de 4 dígitos' });
    }
  
    // Validar que la calificación esté entre 0 y 10
    if (rate < 0 || rate > 10) {
      return res.status(400).json({ message: 'La calificación debe estar entre 0 y 10' });
    }
  
    next();
  }
  
  module.exports = { validateMovieData };
  