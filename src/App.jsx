import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

export const baseUrl = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com"

const App = () => {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
}

export default App;
