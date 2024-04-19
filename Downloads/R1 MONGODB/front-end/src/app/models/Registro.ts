export class Registro {
  usuario: string;
  tipo_mantenimiento: string;
  descripcion: string;
  area_solicitante: string;
  fecha_solicitud: Date;
  urgencia: string;
  estado: string;

  constructor(
    usuario: string,
    tipo_mantenimiento: string,
    descripcion: string,
    area_solicitante: string,
    fecha_solicitud: Date,
    urgencia: string,
    estado: string
  ) {
    this.usuario = usuario;
    this.tipo_mantenimiento = tipo_mantenimiento;
    this.descripcion = descripcion;
    this.area_solicitante = area_solicitante;
    this.fecha_solicitud = fecha_solicitud;
    this.urgencia = urgencia;
    this.estado = estado;
  }
}
