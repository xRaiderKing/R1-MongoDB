import { Injectable } from '@angular/core';
import { Registro } from '../models/Registro';
import { clienteAxios } from '../helpers/ClienteAcess';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesMantenimientoService {
  public isError!: boolean;

  constructor() { }

  //Registrar
  async insertarMantenimiento(usuario:any):Promise<any>{
    try {
      // TODO: Mover hacia un cliente Axios
      const { data } = await clienteAxios.post("/mantenimiento/add",usuario);
      //console.log(data.msg);
      this.isError = false;

      return {msg:data.msg,error:this.isError};
    } catch (error) {
      let resp:any = error;
      this.isError = true;

      return {msg:resp.response.data.msg,error:this.isError};
    };
  };

  //LISTAR
  async listarReportes(){
    try {
      const { data } = await clienteAxios.get("/mantenimiento/list");
      return data;
    } catch (error) {
      console.log("Error angular");
    }
  }
  //Editar
  async editarSolicitud(id:any){
    try {
      const { data } = await clienteAxios.post("/mantenimiento/edit",id);
      return data;
    } catch (error) {

    }
  }


}

