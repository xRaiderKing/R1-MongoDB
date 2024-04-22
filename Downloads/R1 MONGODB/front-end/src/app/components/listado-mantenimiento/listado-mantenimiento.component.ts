import { SolicitudesMantenimientoService } from './../../services/solicitudes-mantenimiento.service';
import { Component, OnInit, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-mantenimiento',
  standalone: true,
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './listado-mantenimiento.component.html',
  styleUrl: './listado-mantenimiento.component.css'
})
export default class ListadoMantenimientoComponent implements OnInit{
  public datos :any []= []; //lista de registros
  public datosFiltrados: any []=[];
  public filtroEstadoInput: string = '';
  public filtroEstadoSelect: string = '';

  constructor(private solicitudService:SolicitudesMantenimientoService){}
  ngOnInit(): void {
    this.traerReportes();
  }

  async traerReportes(){
    const data = await this.solicitudService.listarReportes();
    this.datos = data;
    this.aplicarFiltroEstado();
  }

  aplicarFiltroEstado() {
    // Comprobar si se está utilizando el filtro de entrada o el filtro de selección
    let filtro = '';
    if (this.filtroEstadoInput.trim() !== '') {
      filtro = this.filtroEstadoInput.trim().toLowerCase();
    } else if (this.filtroEstadoSelect !== '') {
      filtro = this.filtroEstadoSelect.toLowerCase();
    }

    // Filtrar los datos según el filtro
    if (filtro === '') {
      // Mostrar todos los registros si no hay filtro
      this.datosFiltrados = this.datos;
    } else {
      // Filtrar los registros por estado
      this.datosFiltrados = this.datos.filter(registro => registro.estado.toLowerCase().includes(filtro));
    }
  }

}
