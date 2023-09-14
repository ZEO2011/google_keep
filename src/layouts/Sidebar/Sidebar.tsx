import NavbarLink from "./components/NavbarLink"
import {
	faBell,
	faEdit,
	faLightbulb,
	faTrashCan,
} from "@fortawesome/free-regular-svg-icons"
import { faInbox } from "@fortawesome/free-solid-svg-icons"

export default function Sidebar({ show }: { show: boolean }) {
	//  status of expanding the sidebar
	return (
		<aside
			className={`shadow-lg h-full w-fit sticky inset-0 p-4 ${
				!show && "pr-5"
			} pr-3 pl-0 bg-white`}
		>
			<nav className="w-full flex flex-col h-[calc(100%-5rem)]">
				<ul className="w-full h-fit mt-4 top-[70px] sticky inset-0">
					<NavbarLink
						show={show}
						icon={faLightbulb}
						to={"/notes"}
					>
						{!show && "notes"}
					</NavbarLink>
					<NavbarLink
						show={show}
						icon={faBell}
						to={"/reminders"}
					>
						{!show && "reminders"}
					</NavbarLink>
					<NavbarLink
						show={show}
						icon={faEdit}
						to={"/edit-labels"}
					>
						{!show && "edit-labels"}
					</NavbarLink>
					<NavbarLink show={show} icon={faInbox} to={"/archive"}>
						{!show && "archive"}
					</NavbarLink>
					<NavbarLink
						show={show}
						icon={faTrashCan}
						to={"/trash"}
					>
						{!show && "reminders"}
					</NavbarLink>
				</ul>
			</nav>
		</aside>
	)
}
