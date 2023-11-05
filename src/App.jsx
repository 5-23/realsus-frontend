import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Signup" element={<Signup />} />
		</Routes>
	);
};

export default App;
