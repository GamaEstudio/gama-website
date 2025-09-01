import { IoTriangle } from "react-icons/io5"
import SquareIcon from "../SquareIcon/SquareIcon"
import lampara from "../../assets/lampara.png"
import type { cardServiciosProps } from "./types"
import "./CardServicios.css"

export default function CardServicios({ info }: cardServiciosProps) {
	return (
		<div className="relative group w-full lg:w-84 text-left">
			<div className="absolute inset-0 blur-md scale-75 group-hover:scale-100 bg-gradient-to-l from-gama-secondary via-gama-red to-gama-primary transition-all duration-200 ease-in-out gradient-glow" />

			<div className="relative border border-gama-primary/20 h-full z-10 bg-[#14121B] rounded-2xl p-9 text-white flex flex-col gap-6">
				<div className="flex flex-col gap-4">
					<SquareIcon>{info.icon}</SquareIcon>
					<h2 className="text-2xl font-bold">{info.titulo}</h2>
				</div>
				<p className="text-base font-normal">{info.descripcion}</p>

				<div className="bg-gama-secondary/10 border border-gama-secondary text-gama-secondary rounded-2xl px-4 py-2 text-xs flex items-center gap-1 font-semibold">
					<img src={lampara} alt="" />
					<span className="text-center">{info.alert}</span>
				</div>

				<ul className="flex flex-col gap-4">
					{info.items.map((item, index) => {
						return (
							<li key={index} className="flex items-center gap-4">
								<IoTriangle className="text-gama-secondary shrink-0" />
								<span className="text-xs font-normal">{item}</span>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
