import Header from "../components/Header";
import styles from "../css/Answer.module.css";

const Answer = () => {
	return (
		<div>
			<Header />

			<div className={styles.mainWrapper}>
				<div className={styles.main}>
					<div>
						<div className={styles.circle}></div>
					</div>
					<div>
						<h1>어나니머스</h1>
						<h2>질문 내용</h2>
					</div>
				</div>
			</div>
			<div className={styles.cardWrapper}>
				<div className={styles.card}>
					<div className={styles.titleWrapper}>
						<div className={styles.iconWrapper}></div>
						<p>susname</p>
					</div>
					<p>input here</p>
				</div>
				<div className={`${styles.card} ${styles.pin}`}>
					<div className={styles.titleWrapper}>
						<div className={styles.iconWrapper}></div>
						<p>susname</p>
					</div>
					<p>input here</p>
				</div>
				<div className={styles.card}>
					<div className={styles.titleWrapper}>
						<div className={styles.iconWrapper}></div>
						<p>susname</p>
					</div>
					<p>input here</p>
				</div>
				<div className={styles.card}>
					<div className={styles.titleWrapper}>
						<div className={styles.iconWrapper}></div>
						<p>susname</p>
					</div>
					<p>input here</p>
				</div>
				<div className={styles.card}>
					<div className={styles.titleWrapper}>
						<div className={styles.iconWrapper}></div>
						<p>susname</p>
					</div>
					<p>input here</p>
				</div>
				<div className={styles.card}>
					<div className={styles.titleWrapper}>
						<div className={styles.iconWrapper}></div>
						<p>susname</p>
					</div>
					<p>input here</p>
				</div>
			</div>
		</div>
	);
};

export default Answer;
