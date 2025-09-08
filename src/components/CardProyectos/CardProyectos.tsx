import type { cardProyectosProps } from "./types"
import { FaArrowTrendUp } from "react-icons/fa6"
import "./CardProyectos.css"

export default function CardProyectos({ info }: cardProyectosProps) {
	return (
		<div className="relative group lg:h-[680px] w-full text-left">
			<div className="absolute inset-0 blur-md scale-75 group-hover:scale-100 bg-gradient-to-l from-gama-secondary via-gama-red to-gama-primary transition-all duration-200 ease-in-out gradient-glow" />

			<div className="relative border border-gama-primary/40 h-full z-10 bg-[#02000A] rounded-2xl text-white flex flex-col overflow-hidden">
				<div className="relative overflow-hidden 1/3 lg:h-1/2">
					<div className="absolute right-8 top-8 w-28 lg:w-52 flex items-center justify-center text-xs lg:text-base font-medium px-3 py-2 rounded-2xl bg-gradient-to-r from-gama-secondary to-gama-primary text-black">
						{info.resultados} ventas
					</div>
					<img src={info.imagen} alt="" className="w-full h-full object-cover" />
					<div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#02000A] to-transparent"></div>
				</div>

				<div className="px-9 pt-4 pb-9 flex flex-col justify-between h-2/3 lg:h-1/2">
					<div className="w-28 lg:w-38 flex items-center justify-center text-xs lg:text-sm font-black px-2 py-1 lg:py-2 rounded-3xl bg-gama-secondary/20 border border-gama-secondary text-gama-secondary">
						{info.servicio}
					</div>

					<div>
						<h2 className="text-xl lg:text-3xl font-black">{info.nombre}</h2>
						<p className="text-xs lg:text-base font-normal">{info.descripcion}</p>
					</div>

					<div className="bg-gama-secondary/10 border border-gama-secondary text-white font-normal rounded-2xl px-4 lg:px-8 py-3 flex items-center gap-1">
						<p className="text-xs lg:text-base">
							<span className="text-gama-secondary font-extrabold">Transformación: </span>
							{info.transformacion}
						</p>
					</div>

					<div className="text-gama-secondary flex justify-between">
						<div className="text-xl lg:text-3xl font-black flex items-center gap-4">
							<FaArrowTrendUp />
							<p className="text-xs lg:text-sm font-semibold">Resultados verifiacados</p>
						</div>
						<div>
							<p className="text-xl lg:text-3xl font-black">{info.resultados}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
