export type Precio = {
	cantidad: number; // 10
	moneda: 'USD' | 'MXN' | 'ARS' | string;
};

export type Servicio = {
	titulo: string;
	imagen: string;
	alt: string;
	descripcion: string;
	precio: Precio;
	destacado?: boolean;
	nuevo?: boolean;
};