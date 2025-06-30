import React from "react"

export type ButtonProps = {
	children: React.ReactNode
	onClick?: () => void
	opcion?: "1" | "2"
	className?: string
	sizeClass?: string // <-- nueva prop opcional
}
