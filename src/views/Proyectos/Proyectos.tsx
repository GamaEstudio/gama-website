import Button from "../../components/Button/Button"
import CardProyectos from "../../components/CardProyectos/CardProyectos"
import "./Proyectos.css"
import imgProyecto1 from "../../assets/proyecto1.png"
import imgProyecto2 from "../../assets/proyecto2.png"

import imgProyecto3 from "../../assets/proyecto3.png"
import imgProyecto4 from "../../assets/proyecto4.png"
import rayo from "../../assets/rayo.svg"

import type { ProyectosProps } from "./types"

const Proyectos = ({ id = "", className = "" }: ProyectosProps) => {
	const cards = [
		{
			resultados: "+400%",
			servicio: "Tienda online",
			nombre: "E-commerce",
			descripcion: "De 0 a $50K mensuales en 3 meses. Diseño premium que convierte visitantes en compradores compulsivos.",
			transformacion: "Antes: Web genérica sin personalidad → Después: Máquina de ventas 24/7",
			imagen: imgProyecto1,
		},
		{
			resultados: "+1.200%",
			servicio: "Aplicación Web",
			nombre: "CRM",
			descripcion: "Dashboard que enamoró a 10K+ usuarios. UX tan intuitivo que redujo el soporte técnico en 80%.",
			transformacion: "Antes: Interfaz confusa → Después: Experiencia adictiva",
			imagen: imgProyecto2,
		},
		{
			resultados: "+400%",
			servicio: "Tienda online",
			nombre: "E-commerce",
			descripcion: "De 0 a $50K mensuales en 3 meses. Diseño premium que convierte visitantes en compradores compulsivos.",
			transformacion: "Antes: Web genérica sin personalidad → Después: Máquina de ventas 24/7",
			imagen: imgProyecto3,
		},
		{
			resultados: "+400%",
			servicio: "Tienda online",
			nombre: "E-commerce",
			descripcion: "De 0 a $50K mensuales en 3 meses. Diseño premium que convierte visitantes en compradores compulsivos.",
			transformacion: "Antes: Web genérica sin personalidad → Después: Máquina de ventas 24/7",
			imagen: imgProyecto4,
		},
	]

	return (
		<div id={id} className={className}>
			<div className="tamañoPagina relative w-full h-full flex flex-col gap-6 lg:gap-0 !py-15 lg:!py-0 items-center justify-evenly text-white text-center">
				<div className="w-full flex flex-col items-center gap-5">
					<div className="w-38 lg:w-42 flex items-center justify-center text-xs lg:text-sm font-bold px-6 py-2 rounded-2xl bg-gama-black/10 border border-gama-primary text-gama-primary">
						La cruda realidad
					</div>
					<div className="w-full lg:w-2/3 flex flex-col justify-center items-center py-6 px-6 gap-3 relative rounded-[17px] bg-gradient-to-r from-[#221a43] via-[#221a43] to-[#4a571f] backdrop-blur-[0px] border border-gama-secondary">
						<h1 className="text-xl lg:text-3xl font-black">¿Seguís perdiendo clientes por una web amateur?</h1>
						<p className="text-xs lg:text-lg">
							Cada día que esperás, tu competencia se lleva MÁS ventas.
							<br className="hidden lg:block" />
							<span className="text-gama-secondary font-bold">El momento es AHORA.</span>
						</p>
						<Button className="text-nowrap !text-sm lg:!w-2/5 lg:!h-13 lg:!text-lg">Transformar mi web HOY</Button>
					</div>
				</div>
				<div>
					<h1 className="text-3xl text-nowrap lg:text-6xl font-black m-0 p-0">Mientras otros prometen,</h1>
					<h1 className="text-3xl lg:text-6xl font-black m-0 p-0" id="tituloGradientInicio">
						nosotros entregamos
					</h1>
				</div>
				<div className="grid lg:grid-cols-2 gap-8">
					{cards.map((item, index) => {
						return <CardProyectos key={index} info={item}></CardProyectos>
					})}
				</div>

				<div>
					<h1 className="text-3xl lg:text-6xl font-black m-0 p-0">¿Tu marca será la próxima en esta lista?</h1>
					<p className="text-sm lg:text-3xl mt-5">
						Estos resultados no son casualidad. Son el resultado de estrategia, diseño y
						<br className="hidden lg:block" />
						<span className="text-gama-secondary font-bold">obsesión por la perfección.</span>
					</p>
				</div>

				<div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
					<Button className="text-nowrap lg:!w-90 lg:!h-18 lg:!text-2xl">Quiero estos resultados</Button>
					<div className="flex items-center gap-2">
						<img src={rayo} alt="Rayo" />
						<p className="text-base">Respuestas en menos de 24 hs</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Proyectos
