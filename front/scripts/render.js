const container = document.getElementById("container");

const renderCards = (data) => {
    container.innerHTML = ""; // Limpiar antes de renderizar nuevas películas

    data.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("cards");
        card.dataset.id = movie._id; // Aquí agregamos el ID único de la película
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" />
            <h2>${movie.title}</h2>
            <p>Director: ${movie.director}</p>
            <p>Duration: ${movie.duration}</p>
            <p>Year: ${movie.year}</p>
            <p>Genre: ${movie.genre.join(", ")}</p>
            <p>Rate: ${movie.rate}</p>
            <button class="watch-btn">Watch</button>
            <button class="delete-btn">Delete</button>
            <button class="like-btn">Like</button>
        `;
        container.appendChild(card);
    });

    // Event listener para manejar el clic en los botones de cada tarjeta
    container.addEventListener("click", (event) => {
        const card = event.target.closest(".cards");
        if (!card) return;

        const movieTitle = card.querySelector("h2").textContent;
        const movieId = card.dataset.id; // Obtener el ID de la película desde el data-id

        if (event.target.classList.contains("watch-btn")) {
            console.log("Ver película:", movieTitle);
        }

        if (event.target.classList.contains("delete-btn")) {
            console.log("Eliminar película:", movieTitle);
            card.remove(); // Elimina la tarjeta de la película

            // Eliminar también en el servidor
            fetch(`http://localhost:3000/api/movies/${movieId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al eliminar la película');
                }
                console.log("Película eliminada del servidor");
            })
            .catch(error => {
                console.error("Error al eliminar en el servidor:", error);
            });
        }

        if (event.target.classList.contains("like-btn")) {
            console.log("Like a:", movieTitle);
        }
    });
};

module.exports = renderCards;
