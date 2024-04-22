import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SolicitudesMantenimientoService } from '../../services/solicitudes-mantenimiento.service';

@Component({
  selector: 'app-form-mantenimiento',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-mantenimiento.component.html',
  styleUrl: './form-mantenimiento.component.css'
})
export default class FormMantenimientoComponent {
  mantenimientoForm!: FormGroup;

  constructor(private fb: FormBuilder,private mantService:SolicitudesMantenimientoService) { }

  ngOnInit(): void {
    this.mantenimientoForm = this.fb.group({
      usuario: ['', Validators.required],
      tipo_mantenimiento: ['', Validators.required],
      descripcion: ['', Validators.required],
      area_solicitante: ['', Validators.required],
      urgencia: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  async onSubmit(){
    if (this.mantenimientoForm.valid) {
      // Aquí puedes enviar el formulario a tu servicio para guardar los datos
      console.log(this.mantenimientoForm.value);
      const data = await this.mantService.insertarMantenimiento(this.mantenimientoForm.value);
      console.log(data);
    } else {
      // Marcar los campos como tocados para mostrar los errores de validación
      this.mantenimientoForm.markAllAsTouched();
    }
  }

}
