import banner from '~/images/banner.webp'

export default function Hero () {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25" />
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Estilo, confianza
            <strong className="mt-2 block font-extrabold text-blue-500">
              y actitud.
            </strong>
          </h1>
          <p className="mt-4 max-w-lg text-white/90 sm:text-xl sm:leading-relaxed">
            Un corte, una experiencia. En Barbería Alura, fusionamos la
            artesanía tradicional con las últimas tendencias para ofrecerte un
            servicio inigualable.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="/servicios"
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            >
              Ver Servicios
            </a>
            <a
              href="/contacto"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
            >
              Agendar Cita
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
