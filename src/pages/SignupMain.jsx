import { useNavigate } from "react-router-dom";
import styles from "../css/SignupMain.module.css";
import School from "../img/school.svg";

const Signup = () => {
	const navigate = useNavigate();

	const movePage = (page) => {
		console.log(page);
		navigate(page);
	};

	return (
		<div id={styles.app}>
			<h1>학생이신가요? 학부모이신가요?</h1>
			<div className={styles.cardWrapper}>
				<div className={styles.card} onClick={() => movePage("/signup_std")}>
					<img src={School} alt="school" />
					<h2>학생</h2>
				</div>
				<div className={styles.card} onClick={() => movePage("/signup_par")}>
					<img src={School} alt="school" />
					<h2>학부모</h2>
				</div>
			</div>
		</div>
	);
};

export default Signup;
