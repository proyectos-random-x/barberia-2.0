import { Servicio } from './types';
// Imagenes
import cabello from '~/images/cabello.webp'
import barba from '~/images/barba.webp'
import cabellobarba from '~/images/cabello+barba.webp'
import mentinte from '~/images/men-tinte.webp'
import cejas from '~/images/cejas.webp'
import menskinker from '~/images/men-skinker.webp'

export const servicios: Servicio[] = [
	{
		titulo: 'Cabello',
		imagen: cabello,
		alt: 'Corte de cabello con tijera o máquina',
		descripcion: 'Con tijeras o máquina, a gusto del cliente.',
		precio: { 
			cantidad: 10, 
			moneda: 'ARS' 
		},
		destacado: true,
		nuevo: false
	},
	{
		titulo: 'Barba',
		imagen: barba,
		alt: 'Diseño profesional de barba',
		descripcion: 'Corte y diseño profesional de barba.',
		precio: { 
			cantidad: 8, 
			moneda: 'ARS' 
		},
		destacado: true,
		nuevo: false
	},
	{
		titulo: 'Cabello + Barba',
		imagen: cabellobarba,
		alt: 'Servicio completo de cabello y barba',
		descripcion: 'Paquete completo cabello y barba.',
		precio: { 
			cantidad: 15, 
			moneda: 'ARS' 
		},
		destacado: true,
		nuevo: false
	},
	{
		titulo: 'Tinte',
		imagen: mentinte,
		alt: 'Tinte para cabello',
		descripcion: 'Tinte de cabello profesional con productos de calidad.',
		precio: { 
			cantidad: 12, 
			moneda: 'ARS' 
		},
		destacado: false,
		nuevo: true
	},
	{
		titulo: 'Diseño de Cejas',
		imagen: cejas,
		alt: 'Perfilado y diseño de cejas',
		descripcion: 'Cejas definidas y bien cuidadas.',
		precio: { 
			cantidad: 60, 
			moneda: 'ARS' 
		},
		destacado: false,
		nuevo: false
	},
	{
		titulo: 'Limpieza Facial',
		imagen: menskinker,
		alt: 'Tratamiento de limpieza facial',
		descripcion: 'Remueve impurezas, hidrata y renueva tu piel.',
		precio: { 
			cantidad: 20, 
			moneda: 'ARS' 
		},
		destacado: false,
		nuevo: true
	},
];