import { Route, Routes } from "react-router-dom";
import SignupMain from "./pages/SignupMain.jsx";
import SignupStd from "./pages/SignupStd.jsx";
import SignupPar from "./pages/SignupPar.jsx";
import School from "./pages/School.jsx";
import Home from "./pages/Home.jsx";
import Answer from "./pages/Answer.jsx";
import MyPage from "./pages/Mypage.jsx";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signup_main" element={<SignupMain />} />
			<Route path="/signup_std" element={<SignupStd />} />
			<Route path="/signup_par" element={<SignupPar />} />
			<Route path="/school" element={<School />} />
			<Route path="/answer" element={<Answer />} />
			<Route path="/mypage" element={<MyPage />} />
		</Routes>
	);
};

export default App;
