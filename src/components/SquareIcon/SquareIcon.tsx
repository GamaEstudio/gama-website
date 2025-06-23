import type { SquareIconProps } from "./types"
import "./SquareIcon.css"

const SquareIcon = ({ children, onClick, className = "" }: SquareIconProps) => {
	return (
		<div
			onClick={onClick}
			className={`
				w-11 h-11
				sm:w-12 sm:h-12
				lg:w-16 lg:h-16
				flex items-center justify-center rounded-[10px] p-2
				bg-gradient-to-tr from-gama-primary to-gama-secondary
				${className}
			`}
		>
			<span className="text-2xl sm:text-3xl lg:text-4xl">{children}</span>
		</div>
	)
}

export default SquareIcon
