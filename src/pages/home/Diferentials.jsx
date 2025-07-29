import SectionTitle from '$/SectionTitle'

export default function Diferentials() {
	return (
		<section aria-labelledby="titulo-diferenciales" id="diferenciales" className="flex justify-center items-center flex-col py-12">
			<SectionTitle texto="Diferenciales" />
			<div className="grid grid-cols-2 space-x-6">
				<div class="lista flex justify-center items-start flex-col space-y-3 w-75 mx-auto">
					<h3 class="font-bold text-xl">Atención personalizada!</h3>
					<p class="text-lg">★ Espacio diferenciado</p>
					<p class="text-lg">★ Localización</p>
					<p class="text-lg">★ Profesionales calificados</p>
					<p class="text-lg">★ Puntualidad</p>
					<p class="text-lg">★ Limpieza</p>
				</div>
				<img src="src/assets/images/diferenciales.webp" loading="lazy" class="rounded shadow w-10/12" alt="Atención personalizada" title="diferenciales" />
			</div>
		</section>
  )
}