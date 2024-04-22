import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalService } from './../../services/personal.service';

@Component({
  selector: 'app-listado-personal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-personal.component.html',
  styleUrl: './listado-personal.component.css'
})
export default class ListadoPersonalComponent {
  public datos=null; // lista de registros

  constructor(private personalService:PersonalService){}
  ngOnInit(): void {
    this.traerPersonal();
  }

  async traerPersonal(){
    const data = await this.personalService.listarPersonal();
    this.datos = data;
    console.log(data);
  }

  

}
