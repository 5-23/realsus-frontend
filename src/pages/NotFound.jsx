import styles from "../css/MyPage.module.css";
import SchoolIcon from "../img/school_icon.svg";
import Header from "../components/Header";

const NotFound = () => {
	return (
		<div>
			<Header />
			<h1
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					color: "#2255ff",
					fontSize: "4vw"
				}}
			>NotFound :(</h1>
		</div>
	);
};

export default NotFound;