import styles from "../css/School.module.css";
import Header from "../components/Header";

const School = () => {
	return (
		<div>
			<Header />
			<div id={styles.app}>
				<main> 
					<article>
						<section>
							<h1>선린인터넷고등학교</h1>
							<h2>서울특별시 용산구에 위치한 IT 특성화 고등학교</h2>
						</section>
						
						<section>
							<a href=""> <img src="../web.svg" alt="o" />  홈페이지</a>
							<a href=""> <img src="../map.svg" alt="o" />  주소</a>
							<a href="">  <img src="../tel.svg" alt="o" /> 전화</a>
						</section>
					</article>
				</main> 
				<footer>
					<h1>질문(18)</h1>
					<div id={styles.userInput}>
						<div></div>
						<form>
							<input type="text" />
							<input type="submit" value="게시하기"/>
						</form>
					</div>
					<hr />
					<div>
					<QuestionBox name="red sus" dt={new Date("2023-11-19T08:40:00")} des="sus"/>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default School;

/**
 * 
 * @param {{
 *  name: String,
 *  des: String,
 *  dt: Number,
 * }} props 
 * @returns 
 */
function QuestionBox(props) {
	return <div className={styles.qbox}>
		<div className={styles.headWrapper}>
			<div className={styles.head}>
				<div className={styles.profile}></div>
				<h1>{props.name}</h1>
			</div>
			{Math.floor((Number(new Date()) - Number(props.dt)) / (1000*60))}분 전
		</div>
		<div className={styles.description}>
			{props.des}
		</div>
	</div>
}