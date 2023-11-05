import styles from "../css/Header.module.css";
import logo from "../logo2.svg";

const Header = () => {
	return (
		<header>
			<div className={styles.logo}>
				<img src={logo} className={styles.logo} alt="logo" />
			</div>
		</header>
	);
};

export default Header;
