import Personal from "../models/Personal.js";

// funcion para hacer un nuevo registro
const registrarPersonal = async (req, res) => {
    // Extraer los datos del cuerpo de la solicitud
    const { nombre, apellido } = req.body;

    try {
        // Evitar registros duplicados
        //const existeMantenimiento = await Mantenimiento.findOne({ usuario, tipo_mantenimiento, descripcion, area_solicitante, fecha_solicitud, urgencia, estado });
        //if (existeMantenimiento) {
        //    const error = new Error('Mantenimiento ya registrado');
          //  return res.status(400).json({ msg: error.message });
        //}

        // Crear un nuevo objeto de tipo Mantenimiento usando el modelo
        const nuevoPersonal = await new Personal(req.body);
        console.log(req.body);
        console.log(nuevoPersonal);
        // Almacenar el nuevo mantenimiento en la base de datos
        const personalAlmacenado = await nuevoPersonal.save();

        // Responder con un mensaje de éxito
        res.json({ msg: "Personal registrado" });
    } catch (error) {
        // Manejar errores
        console.log(error);
        const erro = new Error("Error al intentar registrar el personal");
        return res.status(500).json({ msg: erro.message });
    }
};

// listar registros
const listarSolicitudes = async (req,res) => {
    const {nombreEmp} = req.body;
    try {
        //const data = await Mantenimiento.find({'usuario':nombreEmp});
        const data = await Personal.find();
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

// Función para filtrar personal por ID
const filtrarPorId = async (req, res) => {
    const { id } = req.params; // Obtener ID de los parámetros de la URL

    try {
        // Buscar personal por ID en la base de datos
        const personal = await Personal.findById(id);

        // Verificar si se encontró el personal
        if (!personal) {
            return res.status(404).json({ msg: 'Personal no encontrado' });
        }

        // Responder con el personal encontrado
        res.json(personal);
    } catch (error) {
        // Manejar errores
        console.error('Error al buscar personal por ID:', error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
};

export { registrarPersonal, listarSolicitudes, editarSolicitud, filtrarPorId };