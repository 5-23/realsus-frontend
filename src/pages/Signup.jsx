import styles from "../css/Signup.module.css";
import logo from "../logo.svg";
import Cactus from "../img/cactus.svg";

const Signup = () => {
	return (
		<div id={styles.app}>
			<div className={styles.container}>
				<div>
					<img src={logo} className={styles.logo} alt="logo" />
					<h2 className={styles.title}>회원가입</h2>
					<div className={styles.input}>
						<div className={styles.row}>
							<input type="email" name="email" id="email" placeholder="이메일" />
							<input type="number" name="check" id="check" placeholder="인증코드" />
						</div>
						<input type="password" name="password" id="password" placeholder="비밀번호" />
						<input type="password" name="password_check" id="password_check" placeholder="비밀번호 다시 입력" />
					</div>
					<div className={styles.roleSelect}>
						<input className={styles.student} type="radio" name="role" id="role_student" value="student" checked />
						<label for="role_student">학생</label>
						<input className={styles.parents} type="radio" name="role" id="role_parents" value="parents" />
						<label for="role_parents">학부모</label>
					</div>
					<button className={styles.signup}>회원가입</button>
					<span className={styles.noti}>이미 계정이 있으신가요?</span>
				</div>
				<div>
					<img className={styles.cactus} src={Cactus} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Signup;
