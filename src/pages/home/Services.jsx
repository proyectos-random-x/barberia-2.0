import cabello from '~/images/cabello.webp'
import barba from '~/images/barba.webp'
import cabellobarba from '~/images/cabello+barba.webp'

export default function Services() {
  	const servicios = [
	 	{
			titulo: "Cabello",
			imagen: cabello,
			alt: "Corte de cabello con tijera o máquina",
			descripcion: "Con tijeras o máquina, a gusto del cliente.",
			precio: "$10.00"
	 	}, {
			titulo: "Barba",
			imagen: barba,
			alt: "Diseño profesional de barba",
			descripcion: "Corte y diseño profesional de barba.",
			precio: "$8.00"
	 	}, {
			titulo: "Cabello + Barba",
			imagen: cabellobarba,
			alt: "Servicio completo de cabello y barba",
			descripcion: "Paquete completo cabello y barba.",
			precio: "$15.00"
	 	}
  	];

  	return (
		<section id="servicios" className="py-12">
			<div className="max-w-6xl mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
				<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				 	{servicios.map((servicio, index) => (
						<article key={index} className="rounded-lg shadow-md p-4 text-center hover:shadow-xl transition">
					  		<h3 className="text-xl font-semibold mb-2">{servicio.titulo}</h3>
					 		<img src={servicio.imagen} alt={servicio.alt} className="mx-auto rounded-md h-40 object-cover mb-4" loading="lazy" />
						  	<p className="font-bold text-blue-600 text-xl py-3">{servicio.precio}</p>
						  	<p className="text-gray-600 min-h-16">{servicio.descripcion}</p>
						</article>
				 	))}
				</div>
			</div>
		</section>
  	);
}