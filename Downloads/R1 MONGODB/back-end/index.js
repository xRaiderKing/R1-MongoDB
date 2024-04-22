import express,{json} from 'express';
import dotenv from 'dotenv';
import cors from "cors"; // permitir coneiones desde el domini del front

import conectarDB from './config/db.js'
import solicitudesRoutes from './routes/solicitudesRoutes.js'
import personalRoutes from './routes/personalRoutes.js'

//-----------------
const APP = express();  //  Para concentrar la funcionalidad de express
dotenv.config();    // va a buscar por un archivo .env
conectarDB();   //  Conexion a la base de datos
APP.use(express.json());    //  Para procesar informacion JSON correctamente

//----------------- CORS
// Configurar CORS
    // Dominios Permitidos
const whiteList = [process.env.FRONTEND_URL];
const corsOptions = {
    origin:function(origin,callback){
        // Comprobar en la lista blanca
        if(whiteList.includes(origin)){
            // Puede consultar la API
            callback(null,true);
        }else{
            // No esta permitido
            callback(new Error("Error de CORS"));
        };
    }
};

//----------------- routing
APP.use(cors(corsOptions));
//  Para cada solicitud al path:'localhost:4000/' 
APP.use('/app/mantenimiento',solicitudesRoutes);
APP.use('/app/personal',personalRoutes);  

//------------------
//  Escucha las conexiones en el puerto 4000
//const PORT = process.env.PORT || 4000;  // Puerto del servidor
const PORT = 4000;  // Puerto del servidor
APP.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});