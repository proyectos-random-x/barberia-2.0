import { useTodosLosServicios } from '@/hooks/useDestacados'
import { ServicioCard } from '$/ServicioCard'
import SectionTitle from '$/SectionTitle'

export default function Servicios () {
  const servicios = useTodosLosServicios()
  return (
    <div className="bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto py-10 px-4">
          <SectionTitle texto="Catálogo de" marca="Servicios" />
          <p className="mt-2 text-center text-lg text-gray-600">
            Explora la gama completa de tratamientos que tenemos para ofrecerte.
          </p>
        </div>
      </header>
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          {servicios.length === 0
            ? (
            <p className="text-center text-gray-600">
              No hay servicios por el momento.
            </p>
              )
            : (
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {servicios.map(s => (
                <ServicioCard key={s.titulo} servicio={s} />
              ))}
            </div>
              )}
        </div>
      </main>
    </div>
  )
}