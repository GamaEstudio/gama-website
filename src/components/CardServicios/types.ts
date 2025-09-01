import React from "react"

export type cardServiciosProps = {
	info: infoCardServiciosProps
}

export type infoCardServiciosProps = {
	icon: React.ReactNode
	titulo: string
	descripcion: string
	alert: string
	items: string[]
}
