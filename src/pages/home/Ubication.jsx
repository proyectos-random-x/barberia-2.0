import SectionTitle from '$/SectionTitle'

export default function Ubication() {
	return (
		<section aria-labelledby="ubicacion" id="ubicacion" className="py-12">
			<SectionTitle texto="Ubicación" />
			<p className="text-center mb-6">Nuestro establecimiento esta ubicado en...</p>
			<div className="relative" style={{ height: '340px' }}>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6681071347466!2d-58.43376648517714!3d-34.587263564133806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb590a3a6ec1d%3A0xa5cd4d6d1b058117!2sTucson%20Restaurante%20-%20Soho!5e0!3m2!1ses-419!2sar!4v1660328943391!5m2!1ses-419!2sar" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa de ubicación de la Barbería Alura"></iframe>
			</div>
		</section>
  )
}