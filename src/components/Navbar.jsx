import { NavLink } from 'react-router-dom'

export default function Navbar() {
	
	const navLinkClass = ({ isActive }) => isActive ? 'bg-blue-600/50 text-blue-50' : 'text-gray-700 hover:bg-blue-600/10'
	return (
		<nav className="container xl:w-5xl lg:w-4xl md:w-5xl xs:w-full mx-auto bg-neutral-50/50 backdrop-blur flex justify-between items-center p-4 px-6 sticky rounded mb-4">
			<div className="logo font-bold text-2xl">
			  	<NavLink to="/">Barbería</NavLink>
			</div>
			<ul className="flex space-x-4">
			 	<li><NavLink to="/" className={(props) => `py-2 px-4 font-semibold rounded ${navLinkClass(props)}`}>Inicio</NavLink></li>
			 	<li><NavLink to="/servicios" className={(props) => `py-2 px-4 font-semibold rounded ${navLinkClass(props)}`}>Servicio</NavLink></li>
			 	<li><NavLink to="/contacto" className={(props) => `py-2 px-4 font-semibold rounded ${navLinkClass(props)}`}>Contacto</NavLink></li>
			</ul>
		</nav>
	)
}