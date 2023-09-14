import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar/Sidebar"
import Header from "./Header/Header"
import { useState } from "react"

export function MainLayouts() {
	const [show, setShow] = useState(true)
	return (
		<>
			<Header show={show} setShow={setShow} />
			<div id="content" className="w-full flex h-[calc(100%-5rem)]">
				<Sidebar show={show} />
				<Outlet />
			</div>
		</>
	)
}
