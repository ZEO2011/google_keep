import {
	faBars,
	faBoxes,
	faGear,
	faRefresh,
	faSearch,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dispatch, SetStateAction } from "react"
import Btn from "./components/Btn"

type HeaderProps = {
	show?: boolean
	setShow: Dispatch<SetStateAction<boolean>>
}

export default function Header({ setShow }: HeaderProps) {
	return (
		<header className="w-full h-20 p-2 sticky inset-0 z-50 bg-white flex items-center justify-between border-b-[1px]">
			<div className="w-fit pl-4">
				<div className="flex gap-4 h-24 items-center">
					<button
						className="lg:!grid hidden text-2xl w-14 rounded-full h-14 hover:bg-gray-200 place-items-center"
						onClick={() => setShow((c) => !c)}
					>
						<FontAwesomeIcon icon={faBars} />
					</button>
					<object
						data="/imgs/logo.svg"
						className="w-16"
					></object>
					<h1 className="lg:block hidden">google keep</h1>
				</div>
			</div>
			<div className="relative w-[52rem] h-full xl:block hidden">
				<FontAwesomeIcon
					icon={faSearch}
					className="absolute top-1/2 -translate-y-1/2 left-5 text-2xl"
				/>
				<input
					placeholder="Search"
					type="search"
					className="bg-gray-100 w-full h-full px-4 py-6 pl-16 text-2xl rounded-lg focus:bg-white focus:shadow-md transition"
				/>
			</div>
			<div className="w-fit h-full flex gap-2 justify-center items-center">
				<Btn icon={faRefresh} />
				<Btn icon={faBoxes} />
				<Btn icon={faGear} />
				<Btn img="/imgs/user.jpeg" />
			</div>
		</header>
	)
}
