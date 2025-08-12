import { useDestacados } from '@/hooks/useDestacados'
import { ServicioCard } from '$/ServicioCard'
import SectionTitle from '$/SectionTitle'

export default function Services () {
  const destacados = useDestacados(3)
  return (
    <section id="servicios" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle texto="Nuestros" marca="Servicios Estrella" />
        <p className="text-center text-lg text-gray-600 mt-2 mb-10">
          Descubre los tratamientos que nuestros clientes más eligen.
        </p>
        {destacados.length === 0
          ? (
          <p className="text-center text-gray-600">
            No hay servicios destacados por el momento.
          </p>
            )
          : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {destacados.map(s => (
              <ServicioCard key={s.titulo} servicio={s} />
            ))}
          </div>
            )}
      </div>
    </section>
  )
}