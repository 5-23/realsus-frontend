import styles from "../css/Login.module.css";
import Cactus from "../img/cactus.svg";

const Login = () => {
	return (
		<div id={styles.app}>
			<div className={styles.container}>
				<img src={Cactus} alt="" />
				<h2 className={styles.title}>로그인</h2>
				<div className={styles.input}>
					<input type="email" name="email" id="email" placeholder="이메일" />
					<input type="password" name="password" id="password" placeholder="비밀번호" />
					<span className={styles.noti}>비밀번호를 잊으셨나요?</span>
				</div>
				<button className={styles.login}>로그인</button>
			</div>
		</div>
	);
};

export default Login;
