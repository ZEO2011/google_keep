import { ReactNode } from "react"

export default function Tab({ children }: { children: ReactNode }) {
	return <section className="h-full w-full">{children}</section>
}
