import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '$/Navbar'
import Footer from '$/Footer'
// Secciones
import Home from '&/Home'
import Servicios from '&/Servicios'
import Contacto from '&/Contacto'
//
import banner from '~/images/banner.webp'

function App() {
  	return (
    	<Router>
	    	<header className="bg-center bg-no-repeat bg-cover pt-4" style={{ backgroundImage: `url(${banner})` }}>
	    		<Navbar />
	    		<div className="text-center pt-8 pb-28">
	    			<h1 className="text-white text-4xl uppercase font-bold">Barbería - Alura</h1>
	    		</div>
	    	</header>
      	
      	<main className="container xl:w-5xl lg:w-4xl md:w-5xl xs:w-full mx-auto bg-white -mt-10 p-4 rounded shadow mb-10">
				<Routes>
		      	<Route path="/" element={<Home />} />
		      	<Route path="/servicios" element={<Servicios />} />
		      	<Route path="/contacto" element={<Contacto />} />
		      </Routes>
      	</main>

      	<Footer />
    	</Router>
  )
}

export default App