import React from 'react';
import { NavLink } from 'react-router-dom'

export default function Footer() {
	return (
	 	<footer className="bg-zinc-50 text-gray-800">
			<div className="max-w-7xl mx-auto px-6 py-10 grid gap-10 grid-cols-1 md:grid-cols-4">
		  
			  	<div>
				 	<h2 className="text-xl font-bold text-gray-950">Barbería Alura</h2>
				 	<p className="mt-2 text-gray-800">Desde 2020 brindando estilo, confianza y actitud. Un corte, una experiencia.</p>
			  	</div>

			  	<nav aria-label="Enlaces rápidos" className="text-sm">
				 	<h3 className="font-semibold text-gray-950 text-lg mb-2">Navegación</h3>
				 	<ul className="space-y-1 text-gray-800">
						<li><NavLink to="/servicios" className="hover:underline">Servicios</NavLink></li>
						<li><a href="#ubicacion" className="hover:underline">Ubicación</a></li>
						<li><a href="#porque-elegirnos" className="hover:underline">¿Por qué elegirnos?</a></li>
						<li><NavLink to="/contacto" className="hover:underline">Contacto</NavLink></li>
				 	</ul>
			  	</nav>

			  	<div className="text-sm">
				 	<h3 className="font-semibold text-gray-950 text-lg mb-2">Contacto</h3>
				 	<ul className="text-gray-800 space-y-1">
						<li><strong>Tel:</strong> <a href="tel:+5491123456789" className="hover:underline">+54 9 11 2345 6789</a></li>
						<li><strong>Email:</strong> <a href="mailto:info@barberiaalura.com" className="hover:underline">info@barberiaalura.com</a></li>
						<li><strong>Dirección:</strong> Av. Siempre Viva 123, CABA</li>
				 	</ul>
			  	</div>

			  	<div className="text-sm">
				 	<h3 className="font-semibold text-gray-950 text-lg mb-2">Redes sociales</h3>
				 	<ul className="flex flex-col space-y-1 text-gray-800">
						<li><a href="https://discord.com/users/465203938900049920" target="_blank" rel="noopener noreferrer" className="hover:underline">Discord</a></li>
						<li><a href="https://www.linkedin.com/in/joelmiguelvalente/" target="_blank" rel="noopener noreferrer" className="hover:underline">Linkedin</a></li>
						<li><a href="https://github.com/joelmiguelvalente" target="_blank" rel="noopener noreferrer" className="hover:underline">Github</a></li>
				 	</ul>
			  	</div>
			</div>

			<div className="py-6 text-center text-xs text-gray-800">
			  	<p>&copy; {new Date().getFullYear()} <strong>Barbería Alura</strong>. Todos los derechos reservados.</p>
			  	<p className="italic">Sitio desarrollado por{' '}<a href="#" className="font-semibold text-blue-800 hover:underline">Miguel92</a></p>
			</div>
		</footer>
	);
}
