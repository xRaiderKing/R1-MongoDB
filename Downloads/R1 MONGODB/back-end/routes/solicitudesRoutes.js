import express from 'express';
import {registrar,editarSolicitud, listarSolicitudes} from '../controller/controllerMantenimiento.js'
const app = express.Router();

app.post('/add',registrar);
app.get('/list',listarSolicitudes);
app.post('/edit',editarSolicitud);

export default app;