const movieServices =require("../services/index");

module.exports = {
    getMovies: (req, res) =>{
        movieServices.getMoviesServices();
        res.send(`
            <h1>Title1</h1>
            <p><strong>Este es una frase !!!</strong></p>
            `)
    },
}