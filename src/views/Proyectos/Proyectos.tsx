import "./Proyectos.css"
import type { ProyectosProps } from "./types"

const Proyectos = ({ id = "", className = "" }: ProyectosProps) => {
	return (
		<div id={id} className={className}>
			<div className="tamañoPagina"></div>
		</div>
	)
}

export default Proyectos
