import styles from "../css/Home.module.css";
import Header from "../components/Header";

const Home = () => {
	return (
		<div>
			<Header />
			<div id={styles.app}>
				<div className={styles.mainWrapper}>
					<div className={styles.main}>
						<h1>학교 검색하기</h1>
						<h2>대충 개쩌는 설명글</h2>
					</div>
					<form className={styles.search}>
						<input type="text" name="q" placeholder="학교 이름을 입력하세요." />
						<button>
							<i class="fa-solid fa-magnifying-glass"></i>
						</button>
					</form>
				</div>
				<div className={styles.cardWrapper}>
					<div className={styles.card}>
						<p>선린인터넷고등학교</p>
						<p>학교설명</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
