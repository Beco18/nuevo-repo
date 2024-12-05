console.log(tempData);

const usuario = document.getElementById("usuario");
let i = 1;

// Función para mostrar géneros
const showGenres = (genres) => {
  // Validar que sea un array
  if (Array.isArray(genres)) {
    return genres.map((genre) => `<li>${genre}</li>`).join(""); // Crear lista de géneros
  } else {
    console.error("El género proporcionado no es un array.");
    return "<li>Género desconocido</li>";
  }
};

// Función para crear la tarjeta de una película
const createMovieCard = ({ title, year, director, duration, genre, rate, poster }) => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjetas");

  tarjeta.innerHTML = `
    <img src="${poster}" alt="Póster de ${title}">
    <div class="contenido">
      <div class="card-container">
        <h3>${title}</h3>
        <span><strong>Director: </strong>${director}</span>
        <p><strong>Year:</strong> ${year}</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <ul><strong>Genres:</strong> ${showGenres(genre)}</ul>
        <p><strong>Rate:</strong> ${rate}</p>
      </div>
    </div>
  `;

  return tarjeta;
};

// Clase Movie
class Movie {
  constructor(title, year, director, duration, genre, rate, poster) {
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

// Clase Repository para gestionar las películas
class Repository {
  constructor() {
    this.movies = [];
  }

  createMovie({ title, year, director, duration, genre, rate, poster }) {
    const newMovie = new Movie(title, year, director, duration, genre, rate, poster);
    this.movies.push(newMovie);
  }
}

const repository = new Repository();

// Función para refrescar las tarjetas en pantalla
const refreshMovies = () => {
  const moviesContainer = document.getElementById("containair-tarjetas");
  if (!moviesContainer) return;

  moviesContainer.innerHTML = ""; // Limpiar contenedor
  repository.movies.forEach((movie) => {
    moviesContainer.appendChild(createMovieCard(movie));
  });
};

// Función para renderizar las películas iniciales
const renderInitialMovies = () => {
  const container = document.getElementById("containair-tarjetas");
  if (!container || !Array.isArray(tempData)) {
    console.error("No hay datos iniciales o el contenedor no existe.");
    return;
  }

  tempData.forEach((movie) => {
    container.appendChild(createMovieCard(movie));
  });
};

// Renderizar las películas iniciales
renderInitialMovies();

// Función para añadir una película desde la API
const addMovie = () => {
  if (i > 10) {
    alert("No hay más películas disponibles.");
    return;
  }

  $.get("https://students-api.up.railway.app/movies/")
    .then((response) => {
      if (!response.ok) throw new Error("Error en la solicitud");
      return response.json();
    })
    .then((data) => {
      repository.createMovie(data);
      i++;
      refreshMovies();
    })
    .catch((error) => console.error("Error al cargar la película:", error));
};

// Agregar evento al botón de usuario
usuario.addEventListener("click", addMovie);
