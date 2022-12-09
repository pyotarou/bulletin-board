import { Route, Routes } from "react-router-dom";
import { CreateThread } from "../component/CreateThread";
import Menu from "../component/Menu";
import { Thread } from "../component/Thread";

export const Router = () => {
	return (
		<>
			<Menu />
			<Routes>
				<Route path="/" element={
					<Thread />
				} />
				<Route path="/thread/new" element={
					<CreateThread />
				} />
			</Routes>
		</>
	)
}