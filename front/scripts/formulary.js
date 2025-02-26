document.getElementById('movie-Form').addEventListener('submit', function (e) {
    e.preventDefault();  // Evitar el envío del formulario por defecto
    
    const formData = new FormData(this);
    const movieData = {
        title: formData.get('title'),
        year: formData.get('year'),
        director: formData.get('director'),
        duration: formData.get('duration'),
        genre: formData.get('genre'),
        rate: formData.get('rate'),
        poster: formData.get('poster')  // Enviar el archivo del póster si lo hay
    };
    
    axios.post('http://localhost:3000/api/movies', movieData)
    .then(response => {
        alert('Película creada con éxito');
        window.location.href = 'http://127.0.0.1:8080/index.html';  // Redirigir al listado de películas

    })
    .catch(error => {
        alert('Hubo un error al crear la película: ' + error.message);
    });
});
  
  document.getElementById('clearForm').addEventListener('click', function (e) {
    e.preventDefault();  // Evitar el comportamiento por defecto del botón
  
    
  });
  