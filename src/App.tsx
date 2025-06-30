import NavBar from "./components/NavBar/NavBar"
import Inicio from "./views/Inicio/Inicio"
import Servicios from "./views/Servicios/Servicios"
import Proyectos from "./views/Proyectos/Proyectos"
import Nosotros from "./views/Nosotros/Nosotros"
import Contacto from "./views/Contacto/Contacto"

import "./App.css"

const navigation = [
	{ name: "Inicio", href: "#inicio" },
	{ name: "Servicios", href: "#servicios" },
	{ name: "Proyectos", href: "#proyectos" },
	{ name: "Nosotros", href: "#nosotros" },
	{ name: "Contacto", href: "#contacto" },
]

function App() {
	return (
		<div className="relative">
			<NavBar navigation={navigation} />
			<Inicio id="inicio" className="w-full h-dvh pt-[100px] bg-amber-500" />
			<Servicios id="servicios" className="w-full h-dvh bg-blue-500" />
			<Proyectos id="proyectos" className="w-full h-[200dvh] bg-red-500" />
			<Nosotros id="nosotros" className="w-full h-[200dvh] bg-yellow-500" />
			<Contacto id="contacto" className="w-full h-dvh bg-violet-500" />
		</div>
	)
}

export default App
