import { useState } from 'react'
import Input from '$/Form/Input'
import Textarea from '$/Form/Textarea'
import RadioGroup from '$/Form/RadioGroup'
import Select from '$/Form/Select'
import { SectionTitle } from '$/SectionTitle'

export default function ContactForm () {
  const inputsDefault = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    contacto: 'whatsapp',
    horario: 'manana',
    novedades: true
  }
  const [form, setForm] = useState(inputsDefault)
  const [estado, setEstado] = useState(null) // null | "enviando" | "enviado" | "error"

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEstado('enviando')

    try {
      const response = await fetch('https://formspree.io/f/mgvzyqye', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: new FormData(e.target)
      })

      if (response.ok) {
        setEstado('enviado')
        setForm(inputsDefault)
      } else {
        setEstado('error')
      }
    } catch (error) {
      setEstado('error')
      console.log(error)
    }
  }

  return (
    <div className="bg-gray-50">
       <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto py-10 px-4">
          <SectionTitle texto="Agenda una" marca="Cita" />
          <p className="mt-2 text-center text-lg text-gray-600">
            ¿Listo para tu próximo corte? Rellena el formulario o contáctanos directamente.
          </p>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          {/* Columna del Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <fieldset className="space-y-4">
              <legend className="text-2xl font-bold mb-4 text-gray-800">Tus Datos</legend>
              <Input type="text" id="nombre" label="Nombre y Apellido" required placeholder="Ingresa tu nombre" value={form.nombre} change={handleChange} />
              <Input type="email" id="email" label="Correo electrónico" required placeholder="tu@correo.com" value={form.email} change={handleChange} />
              <Input type="tel" id="telefono" label="Teléfono" placeholder="(+54) 11 1234-5678" value={form.telefono} change={handleChange} />
              <Textarea id="mensaje" label="Mensaje" rows={5} placeholder="Escribe tu mensaje o consulta..." value={form.mensaje} change={handleChange} />
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="text-2xl font-bold mb-4 text-gray-800">Tus Preferencias</legend>
              <RadioGroup id="contacto" label="¿Cómo prefieres que te contactemos?" options={['email', 'telefono', 'whatsapp']} name="contacto" value={form.contacto} onChange={handleChange} />
              <Select id="horario" label="¿En qué horario te viene bien?" value={form.horario} onChange={handleChange} required options={[{ value: 'manana', label: 'Mañana' }, { value: 'tarde', label: 'Tarde' }, { value: 'noche', label: 'Noche' }]} />
              <div className="flex items-center gap-2 pt-2">
                <input type="checkbox" id="novedades" name="novedades" checked={form.novedades} onChange={handleChange} className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
                <label htmlFor="novedades" className="text-sm text-gray-700">¿Te gustaría recibir novedades y promociones?</label>
              </div>
            </fieldset>

            {estado === 'enviado' && <div className="bg-green-100 text-green-800 p-4 rounded">¡Gracias! Tu mensaje fue enviado.</div>}
            {estado === 'error' && <div className="bg-red-100 text-red-800 p-4 rounded">Ocurrió un error. Por favor, inténtalo de nuevo.</div>}

            <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400" disabled={estado === 'enviando'}>
              {estado === 'enviando' ? 'Enviando...' : 'Confirmar Cita'}
            </button>
          </form>

          {/* Columna de Información */}
          <aside className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Información de Contacto</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  <a href="tel:+5491123456789" className="hover:underline">+54 9 11 2345 6789</a>
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  <a href="mailto:info@barberiaalura.com" className="hover:underline">info@barberiaalura.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  <span>Av. Siempre Viva 123, CABA</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Horarios de Atención</h3>
              <div className="overflow-x-auto">
								<table className="min-w-full text-lg text-left">
									<thead className="border-b-2 border-gray-300">
										<tr>
											<th className="pb-2 font-semibold">Día</th>
											<th className="pb-2 font-semibold">Horario</th>
										</tr>
									</thead>
									<tbody className="text-gray-700">
										<tr className="border-b border-gray-200"><td className="py-2">Lunes a Viernes</td><td className="py-2">09:00 - 20:00</td></tr>
										<tr className="border-b border-gray-200"><td className="py-2">Sábados</td><td className="py-2">10:00 - 18:00</td></tr>
										<tr><td className="py-2">Domingos</td><td className="py-2">Cerrado</td></tr>
									</tbody>
								</table>
							</div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}