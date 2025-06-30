import "./Inicio.css"
import type { InicioProps } from "./types"

const Inicio = ({ id = "", className = "" }: InicioProps) => {
	return (
		<div id={id} className={className}>
			<div className="tamañoPagina"></div>
		</div>
	)
}

export default Inicio
