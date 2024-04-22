import mongoose from "mongoose";

const mantenimientoSchema = new mongoose.Schema({
  usuario: { type: String, required: true },
  tipo_mantenimiento: { type: String, required: true },
  descripcion: { type: String, required: true },
  area_solicitante: { type: String, required: true },
  fecha_solicitud: { type: Date, required: true },
  urgencia: { type: String, required: true },
  estado: { type: String, required: true }
}, { timestamps: true });

const Mantenimiento = mongoose.model('Mantenimiento', mantenimientoSchema);

export default Mantenimiento;
