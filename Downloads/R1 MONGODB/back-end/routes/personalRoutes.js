import express from 'express';
import {registrarPersonal,editarSolicitud, listarSolicitudes} from '../controller/controllerPersonal.js'
const app = express.Router();

app.post('/add',registrarPersonal);
app.get('/list',listarSolicitudes);
app.post('/edit',editarSolicitud);


export default app;