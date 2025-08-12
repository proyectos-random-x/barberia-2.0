import SectionTitle from '$/SectionTitle'

export default function Ubication () {
  return (
    <section aria-labelledby="ubicacion" id="ubicacion" className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle texto="Nuestra" marca="Ubicación" />
        <p className="text-center text-lg text-gray-600 mt-2 mb-10">
          Encuéntranos en el corazón de la ciudad, listos para atenderte.
        </p>
        <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6681071347466!2d-58.43376648517714!3d-34.587263564133806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb590a3a6ec1d%3A0xa5cd4d6d1b058117!2sTucson%20Restaurante%20-%20Soho!5e0!3m2!1ses-419!2sar!4v1660328943391!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación de la Barbería Alura"
            className="absolute top-0 left-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  )
}