import { Route, Routes } from "react-router"

import Layout from "@/layouts/Layout"
import Home from '&/Home'
import Servicios from '&/Servicios'
import Contacto from '&/Contacto'
import { Galeria } from '&/Galeria'
import NotFoundPage from '&/NotFoundPage'

const App = () => {

  	return (
    	<Routes>
        
	      <Route>
	        	<Route element={<Layout />}>
	          	{/* Public */}
	            <Route index path="/" element={<Home />} />
	            <Route path="/servicios" element={<Servicios />} />
	            <Route path="/galeria" element={<Galeria />} />
	            <Route path="/contacto" element={<Contacto />} />
	            <Route path="*" element={<NotFoundPage />} />
	      	</Route>
	      </Route>

    	</Routes>
  )
}
export default App