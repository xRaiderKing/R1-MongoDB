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

  async onSubmit() {
    if (this.mantenimientoForm.valid) {
      // Obtener la fecha actual
      const fechaActual = new Date().toISOString().split('T')[0];
      // Agregar la fecha actual a los datos del formulario
      const formData = { ...this.mantenimientoForm.value, fecha_solicitud: fechaActual };

      // Aquí puedes enviar los datos del formulario al servicio para guardarlos
      console.log(formData);
      const data = await this.mantService.insertarMantenimiento(formData);
      console.log(data);
    } else {
      // Marcar los campos como tocados para mostrar los errores de validación
      this.mantenimientoForm.markAllAsTouched();
    }
  }

}
