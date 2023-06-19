export interface LesionJugador {
  id: number;
  sueldo: number;
  cargo: null;
  posicion: string;
  fecha_nacimiento: string;
  equipo_anterior: string;
  createdAt: string;
  updatedAt: string;
  usuarioId: number;
  equipoId: number;
  lesionJugadors: Lesion[];
}

export interface Lesion {
  id: number;
  fecha_inicio: string;
  fecha_termino: string;
  Observacion: string;
  lesion: string;
  miembroClubId: number;
}
