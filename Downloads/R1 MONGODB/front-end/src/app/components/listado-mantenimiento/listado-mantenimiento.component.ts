import { SolicitudesMantenimientoService } from './../../services/solicitudes-mantenimiento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-mantenimiento',
  standalone: true,
  imports: [],
  templateUrl: './listado-mantenimiento.component.html',
  styleUrl: './listado-mantenimiento.component.css'
})
export default class ListadoMantenimientoComponent implements OnInit{
  public datos=null; // lista de registros

  constructor(private solicitudService:SolicitudesMantenimientoService){}
  ngOnInit(): void {
    this.traerReportes();
  }

  async traerReportes(){
    const data = await this.solicitudService.listarReportes();
    this.datos = data;
    console.log(data);
  }
}
