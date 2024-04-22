import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonalService } from '../../services/personal.service';

@Component({
  selector: 'app-registro-personal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro-personal.component.html',
  styleUrl: './registro-personal.component.css'
})
export default class RegistroPersonalComponent {
  registroForm!: FormGroup;

  constructor(private fb: FormBuilder,private mantService:PersonalService) { }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.registroForm.valid) {

      const formData = { ...this.registroForm.value };

      // Aquí puedes enviar los datos del formulario al servicio para guardarlos
      console.log(formData);
      const data = await this.mantService.insertarPersonal(formData);
      console.log(data);
    } else {
      // Marcar los campos como tocados para mostrar los errores de validación
      this.registroForm.markAllAsTouched();
    }
  }

}
