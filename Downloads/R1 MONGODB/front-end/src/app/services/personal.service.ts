import { Injectable } from '@angular/core';
import { clienteAxios } from '../helpers/ClienteAcess';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  public isError!: boolean;

  constructor() { }

  //Registrar
  async insertarPersonal(usuario:any):Promise<any>{
    try {
      // TODO: Mover hacia un cliente Axios
      const { data } = await clienteAxios.post("/personal/add",usuario);
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
  async listarPersonal(){
    try {
      const { data } = await clienteAxios.get("/personal/list");
      return data;
    } catch (error) {
      console.log("Error angular");
    }
  }
  //Editar
  async editarSolicitud(id:any){
    try {
      const { data } = await clienteAxios.post("/personal/edit",id);
      return data;
    } catch (error) {

    }
  }

  
}
