import styles from "../css/Signup.module.css";
import logo from "../logo.svg";

const Signup = () => {
	return (
		<div id={styles.app}>
			<div className={styles.container}>
				<img src={logo} className={styles.logo} alt="logo" />
				<h2 className={styles.title}>회원가입</h2>
				<div className={styles.input}>
					<input type="email" name="email" id="email" placeholder="이메일" />
					<input type="password" name="password" id="password" placeholder="비밀번호" />
					<input type="password" name="password_check" id="password_check" placeholder="비밀번호 다시 입력" />
				</div>
				<button className={styles.signup}>회원가입</button>
				<span className={styles.noti}>이미 계정이 있으신가요?</span>
			</div>
		</div>
	);
};

export default Signup;
