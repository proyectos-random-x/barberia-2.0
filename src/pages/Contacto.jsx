import React, { useState } from "react";
import Input from '$/Form/Input'
import Textarea from '$/Form/Textarea'
import RadioGroup from '$/Form/RadioGroup'
import Select from '$/Form/Select'

export default function ContactForm() {
	const inputsDefault = {
		nombre: "",
		email: "",
		telefono: "",
		mensaje: "",
		contacto: "whatsapp",
		horario: "manana",
		novedades: true,
	};
	const [form, setForm] = useState(inputsDefault);

	const [estado, setEstado] = useState(null); // null | "enviando" | "enviado" | "error"

	const handleChange = (e) => {
		const { name, type, value, checked } = e.target;
		setForm({
			...form,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setEstado("enviando");

		try {
			const response = await fetch("https://formspree.io/f/mgvzyqye", {
				method: "POST",
				headers: {
					Accept: "application/json",
				},
				body: new FormData(e.target),
			});

			if (response.ok) {
				setEstado("enviado");
				setForm(inputsDefault);
			} else {
				setEstado("error");
			}
		} catch (error) {
			setEstado("error");
			console.log(error)
		}
	};

	return (
		<section id="contacto" className="py-12 bg-white text-gray-800">
			<div className="max-w-4xl mx-auto px-6">
				<h2 className="text-3xl font-bold mb-6 text-center">Contacto</h2>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="grid grid-cols-2 space-x-6">
						<fieldset className="space-y-4">
							<legend className="text-xl font-semibold mb-2">Datos personales</legend>

							<Input type="text" id="nombre" label="Nombre y Apellido" required={true} placeholder="Ingresa tu nombre" value={form.nombre} change={handleChange} />

							<Input type="email" id="email" label="Correo electrónico" required={true} placeholder="johndoe@barberia.com" value={form.email} change={handleChange} />

							<Input type="tel" id="telefono" label="Teléfono" placeholder="(+54) 11 1234-5678" value={form.telefono} change={handleChange} />

							<Input type="tel" id="telefono" label="Teléfono" placeholder="(+54) 11 1234-5678" value={form.telefono} change={handleChange} />

							<Textarea id="mensaje" label="Mensaje" rows="5" placeholder="Escribí tu mensaje o consulta..." value={form.mensaje} change={handleChange} />
						</fieldset>

						<div>
							<fieldset className="space-y-4">
								<legend className="text-xl font-semibold mb-2">Preferencias</legend>

								<RadioGroup id="contacto" label="¿Cómo le gustaría que lo contactemos?" options={['email', 'telefono', 'whatsapp']} name="contacto" value={form.contacto} onChange={handleChange} />

								<Select id="horario" label="¿En qué horario preferís ser atendido?" value={form.horario} onChange={handleChange} required 
								options={[
									{ value: 'manana', label: 'Mañana' },
									{ value: 'tarde', label: 'Tarde' },
									{ value: 'noche', label: 'Noche' },
								]} />

								<div className="flex items-center gap-2">
									<input
										type="checkbox"
										id="novedades"
										name="novedades"
										checked={form.novedades}
										onChange={handleChange}
									/>
									<label htmlFor="novedades">¿Te gustaría recibir novedades?</label>
								</div>
							</fieldset>

							<div className="overflow-x-auto">
								<table className="min-w-full mt-6 text-sm text-left border border-gray-300">
									<thead className="bg-gray-100">
										<tr>
											<th className="p-2 border-b">Día</th>
											<th className="p-2 border-b">Horario</th>
										</tr>
									</thead>
									<tbody>
										<tr><td className="p-2 border-b">Lunes</td><td className="p-2 border-b">08h ~ 20h</td></tr>
										<tr><td className="p-2 border-b">Miércoles</td><td className="p-2 border-b">08h ~ 20h</td></tr>
										<tr><td className="p-2 border-b">Viernes</td><td className="p-2 border-b">08h ~ 20h</td></tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>

					{estado === "enviado" && (
						<div className="bg-green-100 text-green-800 p-4 rounded mb-4">
							¡Gracias! Tu mensaje fue enviado.
						</div>
					)}
					{estado === "error" && (
						<div className="bg-red-100 text-red-800 p-4 rounded mb-4">
							Ocurrió un error. Por favor, intentá nuevamente.
						</div>
					)}

					<button
						type="submit"
						className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
						disabled={estado === "enviando"}
					>
						{estado === "enviando" ? "Enviando..." : "Enviar formulario"}
					</button>
				</form>
			</div>
		</section>
	);
}