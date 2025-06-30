import "./Nosotros.css"
import type { NosotrosProps } from "./types"

const Nosotros = ({ id = "", className = "" }: NosotrosProps) => {
	return (
		<div id={id} className={className}>
			<div className="tamañoPagina"></div>
		</div>
	)
}

export default Nosotros
