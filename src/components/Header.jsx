import styles from "../css/Header.module.css";
import logo from "../logo2.svg";

const Header = () => {
	return (
		<header>
			<a className={styles.logo} href="/">
				<img src={logo} className={styles.logo} alt="logo" />
			</a>
			<a className={styles.profile} href="/mypage/a">
				<div className={styles.profileImg}></div>
				<p>username</p>
			</a>
		</header>
	);
};

export default Header;
