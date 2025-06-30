import "./Contacto.css"
import type { ContactoProps } from "./types"

const Contacto = ({ id = "", className = "" }: ContactoProps) => {
	return (
		<div id={id} className={className}>
			<div className="tamañoPagina"></div>
		</div>
	)
}

export default Contacto
