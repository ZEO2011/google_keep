import { Navigate, createBrowserRouter } from "react-router-dom"
import Notes from "./pages/Notes"
import { MainLayouts } from "./layouts/MainLayouts"
import Reminders from "./pages/Reminders"
import EditLabels from "./pages/EditLabels"
import Archive from "./pages/Archive"
import Trash from "./pages/Trash"

export const router = createBrowserRouter([
	{
		element: <MainLayouts />,
		children: [
			{ index: true, element: <Navigate to={"/notes"} /> },
			{ path: "/notes", element: <Notes /> },
			{ path: "/reminders", element: <Reminders /> },
			{ path: "/edit-labels", element: <EditLabels /> },
			{ path: "/archive", element: <Archive /> },
			{ path: "/trash", element: <Trash /> },
		],
	},
])
