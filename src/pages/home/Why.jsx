import SectionTitle from '$/SectionTitle'

export default function Why() {
	return (
		<section aria-labelledby="porque-elegirnos" id="porque-elegirnos" className="py-12">
			<div className="mx-auto px-4">
				<SectionTitle texto="¿Por qué elegirnos?" />

				<ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
					<li className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
						<h3 className="text-xl font-semibold mb-2 text-blue-600">Rapidez</h3>
						<p className="text-gray-700">
							Nos destacamos por ofrecer un servicio ágil sin perder calidad. Valoramos tu tiempo.
						</p>
					</li>

					<li className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
						<h3 className="text-xl font-semibold mb-2 text-blue-600">Calidez</h3>
						<p className="text-gray-700">
							Ambiente cómodo, atención personalizada y trato humano. Te vas a sentir como en casa.
						</p>
					</li>

					<li className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
						<h3 className="text-xl font-semibold mb-2 text-blue-600">Estilo</h3>
						<p className="text-gray-700">
							Estamos al tanto de las últimas tendencias. Queremos que salgas con tu mejor versión.
						</p>
					</li>

					<li className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
						<h3 className="text-xl font-semibold mb-2 text-blue-600">Higiene</h3>
						<p className="text-gray-700">
							Uso riguroso de materiales desinfectados. Tu seguridad y salud son prioridad.
						</p>
					</li>

					<li className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
						<h3 className="text-xl font-semibold mb-2 text-blue-600">Profesionalismo</h3>
						<p className="text-gray-700">
							Barberos certificados con años de experiencia. Te asesoramos con honestidad.
						</p>
					</li>

					<li className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
						<h3 className="text-xl font-semibold mb-2 text-blue-600">Flexibilidad</h3>
						<p className="text-gray-700">
							Hacemos turnos, atención por orden o incluso urgencias. Nos adaptamos a vos.
						</p>
					</li>
				</ul>
			</div>
		</section>
	)
}