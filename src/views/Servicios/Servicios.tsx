import { FaRegEye } from "react-icons/fa"
import { HiOutlineBolt } from "react-icons/hi2"
import { FiFilter } from "react-icons/fi"
import { MdOutlinePalette } from "react-icons/md"
import { BiTargetLock } from "react-icons/bi"
import { LuRefreshCw } from "react-icons/lu"
import "./Servicios.css"
import type { ServiciosProps } from "./types"
import CardServicios from "../../components/CardServicios/CardServicios"

const Servicios = ({ id = "", className = "" }: ServiciosProps) => {
	const badges = [
		{ icon: <FaRegEye />, texto: "Primera impresión profesional" },
		{ icon: <HiOutlineBolt />, texto: "Carga en menos de 3 segundos" },
		{ icon: <FiFilter />, texto: "Más leads automáticamente" },
	]

	const cardsServicios = [
		{
			icon: <MdOutlinePalette />,
			titulo: "Diseño web premium",
			descripcion: "Sitios que venden mientras dormís. Cada pixel estratégicamente ubicado para convertir visitantes en clientes.",
			alert: "Tu web actual está perdiendo el 70% de ventas potenciales por mal diseño",
			items: ["Diseño único", "Optimizado para conversión", "Responsive (apto a todos los formatos)"],
		},
		{
			icon: <BiTargetLock />,
			titulo: "Landing pages que convierten",
			descripcion: "Una página, un objetivo: que tus visitantes se conviertan en clientes.",
			alert: "Los landing pages profesionales convierten 5x más que las paginas genéricas",
			items: ["Copywriting persuasivo", "Matricas en tiempo real"],
		},
		{
			icon: <LuRefreshCw />,
			titulo: "Rediseño estratégico",
			descripcion: "Tu web actual está espantando clientes. La transformamos en una máquina de generar leads y ventas",
			alert: "El 88% de usuarios nmo regresan a iun sitio con mala experiencia",
			items: ["Analisis y estudio para mejorar diseño actual", "UX optimizado", "Visual atrctiva para captar esos clientes que siempre se van"],
		},
	]

	return (
		<div id={id} className={className}>
			<div className="circuloGradientServicios hidden lg:block"></div>
			<div className="tamañoPagina relative w-full h-full flex flex-col gap-6 lg:gap-0 !py-15 lg:!py-0 justify-evenly items-center text-white text-center">
				<div className="w-38 lg:w-42 flex items-center justify-center text-xs lg:text-sm font-bold px-6 py-2 rounded-2xl bg-gama-secondary/10 border border-gama-secondary text-gama-secondary">
					La cruda realidad
				</div>
				<div>
					<h1 className="text-3xl lg:text-6xl font-black m-0 p-0">Tu web actual está</h1>
					<h1 className="text-3xl lg:text-6xl font-black m-0 p-0 text-gama-red">perdiendo dinero</h1>
				</div>
				<div>
					<p className="text-xs lg:text-xl font-normal">
						Cada día que pasa con una web amateur, estás regalando clientes a tu competencia. <br className="hidden lg:block" />
						<span className="font-bold text-gama-secondary">Nosotros lo solucionamos.</span>
					</p>
				</div>
				<div className="flex flex-wrap justify-center gap-3">
					{badges.map((badge, index) => {
						return (
							<div
								key={index}
								className="borderGradientServicios w-full lg:w-auto flex items-center justify-center text-xs lg:text-sm font-bold py-2 px-6 gap-2 rounded-2xl bg-gama-secondary/10 text-gama-secondary"
							>
								{badge.icon}
								<p className="text-white">{badge.texto}</p>
							</div>
						)
					})}
				</div>
				<div className="grid lg:grid-cols-3 gap-8">
					{cardsServicios.map((info, index) => {
						return <CardServicios key={index} info={info} />
					})}
				</div>
			</div>
		</div>
	)
}

export default Servicios
