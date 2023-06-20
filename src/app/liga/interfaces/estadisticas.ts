export interface Estadistica {
  liga: Liga;
  estadisticasLiga: EstadisticasLiga[];
}

interface EstadisticasLiga {
  equipo: Equipo;
  golesFavor: number;
  golesContra: number;
  puntos: number;
  partidosJugados: number;
  partidosGanados: number;
  partidosPerdidos: number;
  partidosEmpatados: number;
}

interface Equipo {
  id: number;
  nombre: string;
  tipo: string;
  escudo: string;
  categoriaId: number;
}

interface Liga {
  nombre: string;
  temporada: number;
}
