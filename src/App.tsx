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
			<Inicio id="inicio" className="w-full h-dvh pt-[100px]" />
			<Servicios id="servicios" className="w-full min-h-dvh lg:h-dvh bg-[#0A0A0E] relative" />
			<Proyectos id="proyectos" className="w-full min-h-[250dvh] lg:h-[250dvh] bg-[linear-gradient(122.29deg,#0F003C_2.96%,#0A0A0E_110.38%)]" />
			<Nosotros id="nosotros" className="w-full h-[200dvh] bg-yellow-500" />
			<Contacto id="contacto" className="w-full h-dvh bg-violet-500" />
		</div>
	)
}

export default App
