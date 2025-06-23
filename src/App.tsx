import PremiumDesignCard from "./components/PremiumDesignCard"
import Button from "./components/Button/Button"
import SquareIcon from "./components/SquareIcon/SquareIcon"

import { FaArrowRight } from "react-icons/fa6"
import { HiMiniArrowTrendingUp } from "react-icons/hi2"
import { FiUsers } from "react-icons/fi"
import { MdOutlineDiamond } from "react-icons/md"

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
			<SquareIcon>
				<HiMiniArrowTrendingUp />
			</SquareIcon>
			<SquareIcon>
				<FiUsers />
			</SquareIcon>
			<SquareIcon>
				<MdOutlineDiamond />
			</SquareIcon>
		</div>
	)
}

export default App
