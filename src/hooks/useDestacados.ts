import { servicios } from '@/lib/servicios';
import { Servicio } from '@/lib/types';

export function useDestacados(limit?: number): Servicio[] {
	const destacados = servicios.filter((s) => s.destacado);
	return typeof limit === 'number' ? destacados.slice(0, limit) : destacados;
}

export function useTodosLosServicios(): Servicio[] {
	return servicios;
}