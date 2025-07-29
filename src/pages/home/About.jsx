import SectionTitle from '$/SectionTitle'
import utensilios from '~/images/utensilios.webp'

export default function About() {
	return (
		<section aria-labelledby="sobre-barberia" id="servicios" className="py-12">
			<SectionTitle texto="Sobre la" marca="Barbería Alura" />
			<article className="relative grid grid-flow-col-dense space-x-6">
				<div className="w-60 h-60 rounded shadow overflow-hidden">
			      <figure className="w-full h-full">
			        	<img loading="lazy" className="w-full h-full" src={utensilios} alt="Utensilios usados en la Barbería Alura" title="Utensilios de la Barbería Alura"
			        />
			        <figcaption className="sr-only">Imagen ilustrativa de los utensilios de la barbería</figcaption>
			      </figure>
			    </div>
				<div className="px-3 lh-4">
					<p>Ubicada en el corazón de la ciudad, la <strong>Barbería Alura</strong> trae para el mercado lo que hay de mejor para su cabello y barba. Fundada en 2020, la <strong>Barbería Alura</strong> ya es destaque en la ciudad y conquista nuevos clientes diariamente.</p>
					<blockquote className="bg-zinc-100 text-center rounded-full my-4 p-4">Nuestra misión es: <em>"Proporcionar autoestima y calidad de vida a nuestros clientes"</em>.</blockquote>
					<p>Ofrecemos profesionales experimentados que están constantemente observando los cambios y movimiento en el mundo de la moda, para así ofrecer a nuestros clientes las últimas tendencias. El atendimiento posee un padrón de excelencia y agilidad, garantizando calidad y satisfacción de nuestros clientes.</p>
				</div>
			</article>
		</section>
  	)
}