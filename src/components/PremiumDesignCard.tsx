import { FaPalette, FaExclamationTriangle } from "react-icons/fa"
import { HiMiniCheckCircle } from "react-icons/hi2"

export default function PremiumDesignCard() {
	return (
		<div className="relative group max-w-sm my-5">
			{/* Glow animado solo al hacer hover */}

			<div className="absolute inset-0 blur-md scale-75 group-hover:scale-100 bg-gradient-to-l from-amber-400 via-fuchsia-500 to-purple-600 transition-all duration-200 ease-in-out gradient-glow" />

			{/* Contenido visible */}
			<div className="relative z-10 bg-[#1A1A1D] rounded-2xl p-6 text-white">
				{/* Tarjeta */}
				<div className="relative z-10 bg-[#1A1A1D] rounded-2xl p-6 text-white font-sans">
					<div className="flex items-center gap-3 mb-4">
						<div className="bg-gradient-to-br from-purple-500 to-purple-800 p-2 rounded-xl">
							<FaPalette className="text-white text-xl" />
						</div>
						<h2 className="text-lg font-bold">Diseño web premium</h2>
					</div>
					<p className="text-sm text-gray-300 mb-4">
						Sitios que venden mientras dormís. Cada pixel estratégicamente ubicado para convertir visitantes en clientes.
					</p>

					<div className="bg-lime-900/20 border border-lime-500 text-lime-300 rounded-md px-4 py-2 text-sm mb-5 flex items-center gap-2">
						<FaExclamationTriangle className="text-lime-400" />
						<span>Tu web actual está perdiendo el 70% de ventas potenciales por mal diseño</span>
					</div>

					<ul className="text-sm space-y-2">
						<li className="flex items-center gap-2">
							<HiMiniCheckCircle className="text-lime-400" />
							Diseño único
						</li>
						<li className="flex items-center gap-2">
							<HiMiniCheckCircle className="text-lime-400" />
							Optimizado para conversión
						</li>
						<li className="flex items-center gap-2">
							<HiMiniCheckCircle className="text-lime-400" />
							Responsive (apto a todos los formatos)
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
