export default function Servicios() {
	const listaOriginal = [
		{
			titulo: "Cabello",
			imagen: "src/assets/images/cabello.webp",
			alt: "Corte de cabello con tijera o máquina",
			descripcion: "Con tijeras o máquina, a gusto del cliente.",
			precio: "$10.00"
		}, {
			titulo: "Barba",
			imagen: "src/assets/images/barba.webp",
			alt: "Diseño profesional de barba",
			descripcion: "Corte y diseño profesional de barba.",
			precio: "$8.00"
		}, {
			titulo: "Cabello + Barba",
			imagen: "src/assets/images/cabello+barba.webp",
			alt: "Servicio completo de cabello y barba",
			descripcion: "Paquete completo cabello y barba.",
			precio: "$15.00"
		}, {
			titulo: "Tinte",
			imagen: "src/assets/images/men-tinte.webp",
			alt: "Tinte para cabello",
			descripcion: "Tinte de cabello profesional con productos de calidad.",
			precio: "$12.00",
			destacado: true
		}, {
			titulo: "Diseño de Cejas",
			imagen: "src/assets/images/cejas.webp",
			alt: "Perfilado y diseño de cejas",
			descripcion: "Cejas definidas y bien cuidadas.",
			precio: "$6.00"
		}, {
			titulo: "Limpieza Facial",
			imagen: "src/assets/images/men-skinker.webp",
			alt: "Tratamiento de limpieza facial",
			descripcion: "Remueve impurezas, hidrata y renueva tu piel.",
			precio: "$20.00",
			destacado: true
		}
	];
	const servicios = [...listaOriginal].sort((a, b) => (b.destacado === true) - (a.destacado === true));
	return (
		<section className="py-12">
			<div className="max-w-6xl mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
				<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{servicios.map((servicio, index) => (
						<article key={index} className="relative rounded-lg shadow-md p-4 text-center hover:shadow-xl transition">
							{servicio.destacado && (
								<span className="absolute top-2 right-2 text-xs text-white bg-green-600 px-2 py-0.5 rounded-full">
									Nuevo
								</span>
							)}
							<h3 className="text-xl font-semibold mb-2">{servicio.titulo}</h3>
							<img
								src={servicio.imagen}
								alt={servicio.alt}
								className="mx-auto rounded-md h-40 object-cover mb-4"
								loading="lazy"
							/>
							<p className="font-bold text-blue-600 text-xl py-3">{servicio.precio}</p>
							<p className="text-gray-600 min-h-16">{servicio.descripcion}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}