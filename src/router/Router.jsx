import { Route, Routes } from "react-router-dom";
import { CreateThread } from "../component/CreateThread";
import { Menu } from "../component/Menu";
import { Home } from "../component/Home";
import { Thread } from "../component/Thread";

export const Router = () => {
	return (
		<>
			<Menu />
			<Routes>
				<Route path="/" element={
					<Home />
				} />
				<Route path="/thread/new" element={
					<CreateThread />
				} />
				<Route path="/thread/:thread_id" element={
					<Thread />
				} />
			</Routes>
		</>
	)
}