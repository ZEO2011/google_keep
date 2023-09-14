import { IconDefinition } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"
import { ReactNode } from "react"
import { LinkProps, NavLink, To } from "react-router-dom"

type navlinkProps = {
	icon: IconDefinition
	children: ReactNode
	show: boolean
	to: To
} & Partial<LinkProps>

export default function NavbarLink({
	icon,
	children,
	to,
	show,
	...restProps
}: navlinkProps) {
	const liClasses = classNames(
		`navlink flex text-[1.6rem] cursor-pointer p-4 px-5 rounded-full rounded-l-none transition hover:bg-gray-200 bg-opacity-125 w-fit`,
		restProps.className,
	)
	return (
		<NavLink
			{...restProps}
			className={({ isActive }) =>
				isActive ? `active ${liClasses}` : liClasses
			}
			to={to}
		>
			<div className="icon mr-4 w-8 h-8 grid place-items-center">
				<FontAwesomeIcon icon={icon} />
			</div>
			<h2 className={`lg:block hidden ${!show && "w-52"}`}>
				{children}
			</h2>
		</NavLink>
	)
}
