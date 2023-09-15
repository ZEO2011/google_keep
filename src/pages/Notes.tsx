import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Tab from "../components/Tab"
import {
	faArchive,
	faBell,
	faCheck,
	faEllipsisVertical,
	faPaintBrush,
	faRedo,
	faUndo,
	faUser,
} from "@fortawesome/free-solid-svg-icons"
import { faImage } from "@fortawesome/free-regular-svg-icons"
import { useRef, useState } from "react"
import Btn from "../components/Btn"

export default function Archive() {
	const [newNoteStatus, setNewNoteStatus] = useState(false)
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	function newNoteHandler() {
		setNewNoteStatus(true)
	}
	function textAreaHandler() {
		const textareaStyle = textareaRef.current?.style
		if (textareaStyle?.height !== undefined)
			textareaStyle.height = `${textareaRef.current?.scrollHeight}px`
	}
	return (
		<Tab>
			<div
				className={`w-full ${
					newNoteStatus
						? "h-auto mt-12 items-end"
						: "h-[11.5rem]"
				} flex justify-center items-center`}
			>
				{!newNoteStatus && (
					<button
						className="cursor-text flex justify-between bg-white h-[4.5rem] items-center w-[min(50rem,100%)] mx-2 shadow-lg rounded-lg text-start pl-6 text-2xl"
						onClick={newNoteHandler}
					>
						take a note...
						<div className="w-fit pr-4 flex gap-4 justify-center items-center h-full">
							<button className="hover:bg-gray-200 w-14 h-[85%] rounded-full">
								<FontAwesomeIcon
									className="text-2xl"
									icon={faCheck}
								/>
							</button>
							<button className="hover:bg-gray-200 w-14 h-[85%] rounded-full">
								<FontAwesomeIcon
									className="text-2xl"
									icon={faPaintBrush}
								/>
							</button>
							<button className="hover:bg-gray-200 w-14 h-[85%] rounded-full">
								<FontAwesomeIcon
									className="text-2xl"
									icon={faImage}
								/>
							</button>
						</div>
					</button>
				)}
				{newNoteStatus && (
					<form
						className="w-[min(50rem,100%)] min-h-12 flex flex-col bg-white rounded-lg shadow-lg p-2 overflow-visible"
						onSubmit={(e) => e.preventDefault()}
					>
						<input
							type="text"
							placeholder="title"
							className="h-12 pl-4 pt-2 text-xl font-semibold mb-3"
						/>
						<textarea
							ref={textareaRef}
							onInput={textAreaHandler}
							className="new-note-content w-full px-4 pb-4 resize-none overflow-y-hidden"
							placeholder="take a note..."
						/>
						<div className="w-full h-fit flex justify-between items-center">
							<div className="flex h-fit w-full">
								<Btn
									iconClassName="text-lg"
									icon={faBell}
								/>
								<Btn
									iconClassName="text-lg"
									icon={faUser}
								/>
								<Btn
									iconClassName="text-lg"
									icon={faPaintBrush}
								/>
								<Btn
									iconClassName="text-lg"
									icon={faImage}
								/>
								<Btn
									iconClassName="text-lg"
									icon={faArchive}
								/>
								<Btn
									iconClassName="text-lg"
									icon={faEllipsisVertical}
								/>
								<Btn
									iconClassName="text-lg"
									icon={faUndo}
								/>
								<Btn
									iconClassName="text-lg"
									icon={faRedo}
								/>
							</div>
							<button
								onClick={() => setNewNoteStatus(false)}
								className="px-6 py-2 text-lg w-fit h-fit mr-4 hover:bg-gray-200 rounded-md"
							>
								done
							</button>
						</div>
					</form>
				)}
			</div>
			<div className="flex flex-wrap justify-center w-full h-fit items-center p-4 pb-8 gap-4">
				<div className="w-96 bg-white h-fit p-4 shadow-md rounded-lg">
					<h2 className="text-2xl mb-2">test</h2>
					<p className="leading-snug">
						Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Quaerat sed adipisci voluptas nemo
						temporibus ab laboriosam explicabo eius
						reiciendis, debitis odit nihil doloremque dolores
						quae ipsum assumenda at natus blanditiis. Omnis,
						aperiam? Consequatur magni tempore perspiciatis,
						dolorum, ipsum in id, distinctio animi quidem
						molestiae iusto dolores! Possimus rem dicta
						quisquam laborum minima. Architecto corporis ad
						explicabo unde impedit incidunt consequuntur?
						Labore enim sit nam impedit minus sequi eligendi
						tenetur temporibus non delectus consectetur ex
						totam a molestiae odit esse culpa velit autem,
						accusantium, dolorem at doloremque id explicabo.
						Aspernatur, eum? Earum iste necessitatibus
						delectus maxime accusantium libero, expedita
						quisquam quo a similique explicabo! Aperiam
						praesentium eos natus quam vitae! Corrupti aliquid
						voluptas vero et quisquam libero nostrum odit nam
						suscipit? Excepturi placeat quo fugit perspiciatis
						neque non, perferendis hic at quaerat laboriosam,
						error ullam, odio consectetur porro impedit
						maiores inventore enim recusandae autem eaque ea
						quis nulla! Explicabo, quis magni.
					</p>
				</div>
				<div className="w-96 bg-white h-fit p-4 shadow-md rounded-lg">
					<h2 className="text-2xl mb-2">test</h2>
					<p className="leading-snug">
						Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Quaerat sed adipisci voluptas nemo
						temporibus ab laboriosam explicabo eius
						reiciendis, debitis odit nihil doloremque dolores
						quae ipsum assumenda at natus blanditiis. Omnis,
						aperiam? Consequatur magni tempore perspiciatis,
						dolorum, ipsum in id, distinctio animi quidem
						molestiae iusto dolores! Possimus rem dicta
						quisquam laborum minima. Architecto corporis ad
						explicabo unde impedit incidunt consequuntur?
						Labore enim sit nam impedit minus sequi eligendi
						tenetur temporibus non delectus consectetur ex
						totam a molestiae odit esse culpa velit autem,
						accusantium, dolorem at doloremque id explicabo.
						Aspernatur, eum? Earum iste necessitatibus
						delectus maxime accusantium libero, expedita
						quisquam quo a similique explicabo! Aperiam
						praesentium eos natus quam vitae! Corrupti aliquid
						voluptas vero et quisquam libero nostrum odit nam
						suscipit? Excepturi placeat quo fugit perspiciatis
						neque non, perferendis hic at quaerat laboriosam,
						error ullam, odio consectetur porro impedit
						maiores inventore enim recusandae autem eaque ea
						quis nulla! Explicabo, quis magni.
					</p>
				</div>
				<div className="w-96 bg-white h-fit p-4 shadow-md rounded-lg">
					<h2 className="text-2xl mb-2">test</h2>
					<p className="leading-snug">
						Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Quaerat sed adipisci voluptas nemo
						temporibus ab laboriosam explicabo eius
						reiciendis, debitis odit nihil doloremque dolores
						quae ipsum assumenda at natus blanditiis. Omnis,
						aperiam? Consequatur magni tempore perspiciatis,
						dolorum, ipsum in id, distinctio animi quidem
						molestiae iusto dolores! Possimus rem dicta
						quisquam laborum minima. Architecto corporis ad
						explicabo unde impedit incidunt consequuntur?
						Labore enim sit nam impedit minus sequi eligendi
						tenetur temporibus non delectus consectetur ex
						totam a molestiae odit esse culpa velit autem,
						accusantium, dolorem at doloremque id explicabo.
						Aspernatur, eum? Earum iste necessitatibus
						delectus maxime accusantium libero, expedita
						quisquam quo a similique explicabo! Aperiam
						praesentium eos natus quam vitae! Corrupti aliquid
						voluptas vero et quisquam libero nostrum odit nam
						suscipit? Excepturi placeat quo fugit perspiciatis
						neque non, perferendis hic at quaerat laboriosam,
						error ullam, odio consectetur porro impedit
						maiores inventore enim recusandae autem eaque ea
						quis nulla! Explicabo, quis magni.
					</p>
				</div>
			</div>
		</Tab>
	)
}
