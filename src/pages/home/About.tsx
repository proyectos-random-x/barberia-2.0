import SectionTitle from '$/SectionTitle'
import utensilios from '~/images/utensilios.webp'

export default function About() {
	return (
		<section aria-labelledby="sobre-barberia" id="about" className="overflow-hidden bg-gray-50 py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-y-10 gap-x-12 lg:grid-cols-2">
          <div>
            <SectionTitle texto="Sobre la" marca="Barbería Alura" />
            <p className="mt-4 text-lg text-gray-700">
              Ubicada en el corazón de la ciudad, la <strong>Barbería Alura</strong> trae para el mercado lo que hay de mejor para su cabello y barba. Fundada en 2020, ya es un referente en la ciudad y conquista nuevos clientes diariamente.
            </p>
            <blockquote className="mt-6 border-l-4 border-blue-600 bg-gray-100 p-4 text-xl italic text-gray-800">
              "Proporcionar autoestima y calidad de vida a nuestros clientes."
            </blockquote>
            <p className="mt-6 text-lg text-gray-700">
              Ofrecemos profesionales experimentados y actualizados con las últimas tendencias. Nuestro atendimiento posee un padrón de excelencia y agilidad, garantizando su total satisfacción.
            </p>
          </div>
          <div className="h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              loading="lazy"
              className="h-full w-full object-cover"
              src={utensilios}
              alt="Utensilios profesionales de barbería"
              title="Utensilios de la Barbería Alura"
            />
          </div>
        </div>
      </div>
		</section>
  	)
}