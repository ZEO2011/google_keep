import { IconDefinition } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"
import { ButtonHTMLAttributes } from "react"

type btnProps = Partial<ButtonHTMLAttributes<HTMLButtonElement>> & {
	icon?: IconDefinition
	img?: string
	iconClassName: string
}

export default function Btn({
	icon,
	img,
	iconClassName,
	...restProps
}: btnProps) {
	const iconClassNames = classNames("text-black text-2xl", iconClassName)
	return (
		<button
			{...restProps}
			className={
				"w-[3.5rem] rounded-full h-[3.5rem] grid place-items-center transition hover:text-black hover:bg-gray-200 cursor-pointer p-2 overflow-hidden"
			}
		>
			{icon !== undefined && (
				<FontAwesomeIcon icon={icon} className={iconClassNames} />
			)}
			{img !== undefined && <img src={img} className="rounded-full" />}
		</button>
	)
}
