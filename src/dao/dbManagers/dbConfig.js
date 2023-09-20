import mongoose from "mongoose";

const URL = process.env.MONGO_URL;

try {
  await mongoose.connect(URL);
  console.log("Base de datos conectada");
} catch (error) {
  console.log("Error al conectar a la base de datos");
}