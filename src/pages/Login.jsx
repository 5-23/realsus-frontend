import {useRef} from 'React'
import styles from "../css/Login.module.css";
import Cactus from "../img/cactus.svg";

const Login = () => {
	const email = useRef()
	const password = useRef()
	async function login() {
		//email password value 가져오고 fetch 로 백엔드에 요청넣기
		// http://127.0.0.1:3000/
		let res = await fetch("/login",{
			method: 'get',
			headers:{
				'Content-Type': 'application/json',
        		"email": email.current.value,
	        	"pw": password.current.value,
				
			}

			
		})
		let json = await res.json();
		if (!json.success){
			console.log("sus")
		}
		else
			console.log(json);
		
	}

	return (
		<div id={styles.app}>
			<div className={styles.container}>
				<img src={Cactus} alt="" />
				<h2 className={styles.title}>로그인</h2>
				<div className={styles.input}>
					<input type="email" name="email" id="email" placeholder="이메일" ref={email} />
					<input type="password" name="password" id="password" placeholder="비밀번호" ref={password} />
					<span className={styles.noti}>비밀번호를 잊으셨나요?</span>
				</div>
				<button className={styles.login} onClick={login}>로그인</button>
			</div>
		</div>
	);
};

export default Login;
