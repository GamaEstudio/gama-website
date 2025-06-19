import PremiumDesignCard from "./components/PremiumDesignCard"
import Button from "./components/Button/Button"

import { FaArrowRight } from "react-icons/fa6"

import "./App.css"

function App() {
	return (
		<div className="flex gap-5 flex-wrap">
			<PremiumDesignCard />
			<PremiumDesignCard />
			<div>
				<Button className="mb-4">
					Quiero destacar YA <FaArrowRight />
				</Button>
				<Button opcion="2">Ver casos de éxito</Button>
			</div>
		</div>
	)
}

export default App
