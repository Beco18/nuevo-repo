const renderCards = require("./render");
const axios = require("axios");

async function getCards() {
  try {
    const response = await axios.get("http://localhost:3000/api/movies");
    renderCards(response.data);
  } catch (error) { 
    console.error(error);
  }
}

getCards();
function limpiarformulario(){
  document.getElementById("form").reset();
}
document.getElementById("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {
    title: formData.get("title"),
    director: formData.get("director"),
    year: formData.get("year"),
    rating: formData.get("rating"),
  };
  try {
    await axios.post("http://localhost:3000/api/movies", data);
    getCards();
    limpiarformulario();
  } catch (error) {
    console.error(error);
  }
});




