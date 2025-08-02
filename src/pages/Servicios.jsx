import { useTodosLosServicios } from '@/hooks/useDestacados';
import { ServicioCard } from '$/ServicioCard';

export default function Servicios() {
	const servicios = useTodosLosServicios();
	return (
		<section className="py-12">
			<div className="max-w-6xl mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
				{servicios.length === 0 ? (
		         <p className="text-center text-gray-600">No hay servicios por el momento.</p>
		       ) : (
		         <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		            {servicios.map((s) => (<ServicioCard key={s.titulo} servicio={s} />))}
		         </div>
		      )}
			</div>
		</section>
	)
}