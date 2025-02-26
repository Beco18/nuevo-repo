require('dotenv').config();
const mongoose = require("mongoose");

const conDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log("✅ Conectado a MongoDB");
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos", error);
  }
};

module.exports = conDb;
