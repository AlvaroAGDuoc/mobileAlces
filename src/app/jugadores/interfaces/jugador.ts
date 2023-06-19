export interface Jugador {
  id: number;
  nombre: string;
  apellido: string;
  fecha_incorporacion: string;
  fotografia: string;
  miembroClubs: MiembroClub[];
  perfils: Perfil[];
}

interface MiembroClub {
  id: number;
  posicion: string;
  sueldo: number;
  equipo: Equipo;
  equipo_anterior: string;
}

interface Equipo {
  id: number;
  nombre: string;
  tipo: string;
  escudo: string;
  categoriaId: number;
  categorium: Categorium;
}
interface Categorium {
  nombre: string;
}
interface Perfil {
  nombre: string;
  PerfilUsuario: PerfilUsuario;
}

interface PerfilUsuario {
  id: number;
  estado: number;
  usuarioId: number;
  perfilId: number;
}
