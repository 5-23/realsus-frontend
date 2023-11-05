import styles from "../css/School.module.css";
import Header from "../components/Header";

const School = () => {
	return (
		<div>
			<Header />
			<div id={styles.app}>
				<div className={styles.mainWrapper}>
					<div className={styles.main}>
						<h1>선린인터넷고등학교</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default School;
