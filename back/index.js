const app = require("./src/server");
const { router } = require("./src/routes/router");
const conDb = require("./src/config/conDb");

conDb().then((res) => {
    app.listen(3000,()=>{
        console.log("Estamos escuchando en el puerto 3000");
    });
}).catch((err) => {
    console.log(err);
});