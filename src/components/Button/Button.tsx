import type { ButtonProps } from "./types"
import "./Button.css"

const Button = ({ children, alto = "63px", ancho = "276px", size = "20px", onClick, opcion = "1", className = "" }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			style={{ width: ancho, height: alto, fontSize: size }}
			className={`flex items-center justify-center gap-2.5 rounded-[1rem] font-black px-4 py-2 mx-2 cursor-pointer font-2 ${
				opcion == "1" ? "btn-degradado" : "btn-solido"
			} ${className}`}
		>
			{children}
		</button>
	)
}

export default Button
