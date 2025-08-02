import { Servicio } from '@/lib/types';

type Props = { servicio: Servicio };

export function ServicioCard({ servicio }: Props) {
	return (
		<article className="rounded-lg shadow-md relative p-4 text-center hover:shadow-xl transition">
			<h3 className="text-xl font-semibold mb-2">{servicio.titulo}</h3>
			<img
				src={servicio.imagen}
				alt={servicio.alt}
				className="mx-auto rounded-md h-40 object-cover mb-4"
				loading="lazy"
			/>
			<p className="font-bold text-blue-600 text-xl py-3">
				{formatoPrecio(servicio.precio)}
			</p>
			<p className="text-gray-600 min-h-16">{servicio.descripcion}</p>
			{servicio.nuevo && (
				<span className="absolute top-2 right-2 text-xs text-white bg-green-600 px-2 py-0.5 rounded-full">
					Nuevo
				</span>
			)}
		</article>
	);
}
function formatoPrecio(precio: { cantidad: number; moneda: string }) {
	return `${precio.moneda} ${precio.cantidad.toFixed(2)}`;
}