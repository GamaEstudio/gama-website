import { useEffect, useRef } from "react"
import { NeatGradient, type NeatConfig } from "@firecms/neat"

const config: NeatConfig = {
	colors: [
		{
			color: "#2F1C6A",
			enabled: true,
		},
		{
			color: "#0D0C15",
			enabled: true,
		},
		{
			color: "#0D0C15",
			enabled: true,
		},
		{
			color: "#2F1C6A",
			enabled: true,
		},
		{
			color: "#0D0C15",
			enabled: true,
		},
	],
	speed: 6,
	horizontalPressure: 3,
	verticalPressure: 3,
	waveFrequencyX: 0,
	waveFrequencyY: 0,
	waveAmplitude: 0,
	shadows: 1,
	highlights: 7,
	colorBrightness: 1.35,
	colorSaturation: 5,
	wireframe: false,
	colorBlending: 10,
	backgroundColor: "#000000",
	backgroundAlpha: 1,
	grainScale: 0,
	grainSparsity: 0,
	grainIntensity: 0.125,
	grainSpeed: 0,
	resolution: 0.75,
	yOffset: 0,
}
export default function BgInicio() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
		if (!canvasRef.current) return

		const neat = new NeatGradient({
			ref: canvasRef.current,
			...config,
		})

		return () => {
			neat.destroy()
		}
	}, [])

	return (
		<canvas
			ref={canvasRef}
			style={{
				width: "100%",
				height: "100%",
				position: "absolute",
				top: 0,
				left: 0,
				zIndex: -1,
			}}
		/>
	)
}
