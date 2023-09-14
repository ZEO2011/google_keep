import { IconDefinition } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type btnProps = {
	icon?: IconDefinition
	img?: string
}

export default function Btn({ icon, img }: btnProps) {
	return (
		<button className="w-[3.5rem] rounded-full h-[3.5rem] grid place-items-center transition hover:text-black hover:bg-gray-200 cursor-pointer p-2 overflow-hidden">
			{icon !== undefined && (
				<FontAwesomeIcon
					icon={icon}
					className="text-black text-2xl"
				/>
			)}
			{img !== undefined && <img src={img} className="rounded-full" />}
		</button>
	)
}
