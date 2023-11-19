import styles from "../css/MyPage.module.css";
import SchoolIcon from "../img/school_icon.svg";
import Header from "../components/Header";

const Mypage = () => {
	return (
		<div>
			<Header />
			<div id={styles.app}>
				<div className={styles.mainWrapper}>
					<div className={styles.main}>
						<img src={SchoolIcon} alt=""/>
						<h1>대충 개쩌는 설명글</h1>
						<div>
							<b>5번 질문</b>
							<b>-2번 답변</b>
							<b>3번 채택</b>
						</div>
					</div>
				</div>

				<div className={styles.cardWrapper}>
					<Card id="sunrint" cnt="10"/>
				</div>
			</div>
		</div>
	);
};

export default Mypage;


/**
 * @param {{
 * 	id: Number
 * 	cnt: Number
 * }} props 
 */
function Card(props) {
	return <a href={`/answer/${props.name}`}>
			<div className={styles.card}>
				<div className={styles.titleWrapper}>
					<div className={styles.iconWrapper}>
						<img src={SchoolIcon} alt="" />
					</div>
					<div>
						<p>{`${props.cnt}개의 답변`}</p>
						<p>Anonymous</p>
					</div>
				</div>
				<p>Que</p>
			</div>
		</a>
}