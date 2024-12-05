const app = require("./src/server");
const router = require("./src/routes/route")



// Espere una petición de tipo GET a /movies.

// Al recibir la petición, debe ejecutarse el controlador correspondiente.

// El controlador responda al cliente que realizó la petición con
//  un mensaje que indique que próximamente estarán disponibles 
//  los datos de películas.


app.listen(3000, () =>{
    console.log("Estamos en el puerto 3000");
    
});