import styles from "../css/SignupStd.module.css";
import Cactus from "../img/cactus.svg";
import { useRef } from 'react';

const Signup = () => {
	const name =useRef()
	const email= useRef()
	const password = useRef()
	async function signup() {
		console.log(email)
		let res = await fetch("/signup", {method: "POST", headers: {
			'Content-Type': 'application/json',
			"name": name.current.value,
			"email": email.current.value, 
			"pw": password.current.value, 
			"type": 1
		}})
		console.log(await res.json())
	}
	
	return (
		
		<div id={styles.app}>
			<div className={styles.container}>
				<img src={Cactus} alt="" />
				<h2 className={styles.title}>학생 회원가입</h2>
				<div className={styles.input}>
					<input type="text" name="name" id="name" placeholder="이름" ref={name} />
					<div className={styles.row}>
						<input type="email" name="email" id="email" placeholder="이메일" ref={email}/>
						<input type="number" name="check" id="check" placeholder="인증코드" />
					</div>
					<input type="password" name="password" id="password" placeholder="비밀번호" ref={password}/>
					<input type="password" name="password_check" id="password_check" placeholder="비밀번호 다시 입력" />
				</div>
				<button className={styles.signup} onClick={signup}>회원가입</button>
				<span className={styles.noti}>이미 계정이 있으신가요?</span>
			</div>
		</div>
	);
};

export default Signup;
