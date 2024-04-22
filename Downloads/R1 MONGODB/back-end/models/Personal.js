import mongoose from "mongoose";

const personalSchema = new mongoose.Schema({
  Nombre: { type: String, required: true },
  Apellido: { type: String, required: true },

})

const Personal = mongoose.model('Personal', personalSchema);

export default Personal;
