import type { ButtonProps } from "./types"
import "./Button.css"

const Button = ({ children, onClick, opcion = "1", className = "" }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={`
				w-full h-11 text-base
				sm:w-55 sm:h-13 sm:text-md
				lg:w-70 lg:h-15 lg:text-xl
				flex items-center justify-center gap-2.5 
				rounded-[1rem] font-black px-4 py-2 cursor-pointer font-2
				${opcion === "1" ? "btn-degradado" : "btn-solido"}
				${className}
			`}
		>
			{children}
		</button>
	)
}

export default Button
