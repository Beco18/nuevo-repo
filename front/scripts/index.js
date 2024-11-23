console.log(tempData);

const createMoviesCart = ({
  title,
  year,
  director,
  duration,
  genre,
  rate,
  poster,
}) => {
  const tarjeta = document.createElement("div");

  tarjeta.innerHTML = `
  <div class="tarjetas">
  <img src="${poster}" alt="pelicula 1">
  <div class="contenido">
  <h3>${title}</h3>
  <span>${director}</span>
  <p>${year}</p>
  <p>${duration}</p>
  <p>${genre}</p>
  <p>${rate}</p>
  </div>
  </div>
  `

  return tarjeta;
};

const renrizarCart = () => {
  const containair = document.getElementById("containair-tarjetas");
  if (!containair) {
    return;
  }
  tempData.forEach((movies) => {
    return containair.appendChild(createMoviesCart(movies));
  });
};
renrizarCart();
