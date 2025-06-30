import "./Servicios.css"
import type { ServiciosProps } from "./types"

const Servicios = ({ id = "", className = "" }: ServiciosProps) => {
	return (
		<div id={id} className={className}>
			<div className="tamañoPagina"></div>
		</div>
	)
}

export default Servicios
