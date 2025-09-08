import BgInicio from "../../components/BgInicio/BgInicio"
import SquareIcon from "../../components/SquareIcon/SquareIcon"
import { FaArrowTrendUp } from "react-icons/fa6"
import { LuUsers } from "react-icons/lu"
import { MdOutlineDiamond } from "react-icons/md"
import rayo from "../../assets/rayo.svg"
import "./Inicio.css"
import type { InicioProps } from "./types"
import Button from "../../components/Button/Button"

const Inicio = ({ id = "", className = "" }: InicioProps) => {
	const cardsInicio = [
		{ icon: <FaArrowTrendUp />, dato: "300%", texto: "Más conversaciones promedio" },
		{ icon: <LuUsers />, dato: "7 seg", texto: "Para causar primera impresión" },
		{ icon: <MdOutlineDiamond />, dato: "94%", texto: "Juzga por diseño web" },
	]

	return (
		<div id={id} className={className}>
			<BgInicio />
			<div className="tamañoPagina w-full h-full flex flex-col justify-evenly items-center text-white text-center">
				<div>
					<h1 className="text-3xl lg:text-6xl font-black m-0 p-0">Tu competencia ya tiene</h1>
					<div className="flex flex-col justify-center items-center bg-gama-black lg:px-14 py-1.5 mt-2.5 shadow-[0_0_20px_0_rgba(203,253,2,1)]">
						<h1 className="text-3xl lg:text-6xl font-black m-0 p-0" id="tituloGradientInicio">
							una web profesional
						</h1>
					</div>
				</div>
				<div>
					<div className="text-xl lg:text-4xl font-normal">
						<p>¿Y vos?</p>
					</div>
					<div>
						<p className="text-sm lg:text-lg leading-5">
							Mientras leés esto, tus potenciales clientes están eligiendo a tu competencia
							<br className="hidden lg:block" />
							porque <span className="text-gama-secondary font-bold">su web los convence en segundos.</span> No dejes que te sigan ganando ventas
						</p>
					</div>
				</div>
				<div className="grid lg:grid-cols-3 gap-8">
					{cardsInicio.map((card, index) => {
						return (
							<div
								className="w-full h-28 lg:h-48 py-3 px-6 rounded-[17px] bg-white/10 backdrop-blur-[10px] border border-gama-primary shadow-[0_0_30px_-17px_rgba(203,253,2,1)] flex flex-col items-center justify-evenly"
								key={index}
							>
								<SquareIcon>{card.icon}</SquareIcon>
								<p className="font-bold text-gama-secondary text-md lg:text-3xl">{card.dato}</p>
								<p className="text-[10px] lg:text-sm font-normal text-wrap">{card.texto}</p>
							</div>
						)
					})}
				</div>
				<div className="flex gap-5">
					<Button className="text-nowrap !text-sm lg:!w-58 lg:!h-13 lg:!text-lg">Quiero destacar ya</Button>
					<Button className="!text-sm lg:!w-58 lg:!h-13 lg:!text-lg" opcion="2">
						Ver casos de éxito
					</Button>
				</div>
				<div className="w-full lg:w-2/3 h-20 text-xs lg:text-sm flex justify-center items-center relative rounded-[17px] bg-gradient-to-r from-[#221a43] via-[#221a43] to-[#4a571f] backdrop-blur-[0px] border border-gama-secondary">
					<img src={rayo} alt="Rayo" className="hidden lg:block absolute left-18" />
					<p>
						<span className="text-gama-secondary font-bold">Dato real:</span> El 75% de los usuarios no vuelve a un sitio web mal diseñado.
						<br className="hidden lg:block" />
						<span className="text-gama-secondary font-bold">¿Cuántos clientes estás perdiendo ahora mismo?</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Inicio
