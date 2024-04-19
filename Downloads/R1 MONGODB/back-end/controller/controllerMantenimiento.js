import Mantenimiento from "../models/Mantenimiento.js";

// funcion para hacer un nuevo registro
const registrar = async (req, res) => {
    // Extraer los datos del cuerpo de la solicitud
    const { usuario, tipo_mantenimiento, descripcion, area_solicitante, fecha_solicitud, urgencia, estado } = req.body;

    try {
        // Evitar registros duplicados
        //const existeMantenimiento = await Mantenimiento.findOne({ usuario, tipo_mantenimiento, descripcion, area_solicitante, fecha_solicitud, urgencia, estado });
        //if (existeMantenimiento) {
        //    const error = new Error('Mantenimiento ya registrado');
          //  return res.status(400).json({ msg: error.message });
        //}

        // Crear un nuevo objeto de tipo Mantenimiento usando el modelo
        const nuevoMantenimiento = new Mantenimiento(req.body);
        
        // Almacenar el nuevo mantenimiento en la base de datos
        const mantenimientoAlmacenado = await nuevoMantenimiento.save();

        // Responder con un mensaje de éxito
        res.json({ msg: "Mantenimiento creado correctamente" });
    } catch (error) {
        // Manejar errores
        console.log(error);
        const erro = new Error("Error al intentar registrar el mantenimiento");
        return res.status(500).json({ msg: erro.message });
    }
};

// listar registros
const listarSolicitudes = async (req,res) => {
    const {nombreEmp} = req.body;
    try {
        //const data = await Mantenimiento.find({'usuario':nombreEmp});
        const data = await Mantenimiento.find();
        console.log(data);
        return res.json(data);
    } catch (error) {
        return res.json({msg:"No hay datos de este usuario"});
    }
}

//funcion para editar el estado de un registro
const editarSolicitud = async (req,res) => {
    try {
        const reporteExistente = await Mantenimiento.find({'_id':id});
        console.log(reporteExistente);

    } catch (error) {
        console.log("Error en el servidor");
    }
}


export { registrar, listarSolicitudes, editarSolicitud };