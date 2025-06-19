import React from "react"

export type ButtonProps = {
	children: React.ReactNode
	onClick?: () => void
	alto?: string
	ancho?: string
	size?: string
	opcion?: "1" | "2"
	className?: string
}
