import SectionTitle from '$/SectionTitle'

const features = [
  {
    name: 'Rapidez y Puntualidad',
    description: 'Valoramos tu tiempo. Ofrecemos un servicio ágil y respetamos el horario de tu cita.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Calidez y Ambiente',
    description: 'Siéntete como en casa. Disfruta de un ambiente cómodo, atención personalizada y un trato amigable.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
    )
  },
  {
    name: 'Estilo y Tendencia',
    description: 'Estamos al día con las últimas tendencias para que salgas con tu mejor versión.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.624l.259 1.035L18 22.5l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 18l1.035.259a3.375 3.375 0 002.456 2.456z" />
      </svg>
    )
  },
  {
    name: 'Higiene y Seguridad',
    description: 'Tu salud es nuestra prioridad. Usamos materiales desinfectados y seguimos rigurosos protocolos.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
      </svg>
    )
  }
]

export default function Why () {
  return (
    <section aria-labelledby="porque-elegirnos" id="porque-elegirnos" className="bg-gray-50 py-12">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle texto="¿Por qué" marca="Elegirnos?" />
        <p className="text-center text-lg text-gray-600 mt-2 mb-12">
          La diferencia está en los detalles. Esto es lo que nos hace únicos.
        </p>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.name} className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{feature.name}</h3>
                <p className="mt-1 text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}