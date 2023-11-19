import styles from "../css/Home.module.css";
import SchoolIcon from "../img/school_icon.svg";
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
					<School name="sunrint" des="real sus wifi" id="sunrint"/>					
					<School name="sunrint" des="real sus wifi" id="sunrint"/>					
					<School name="sunrint" des="real sus wifi" id="sunrint"/>					
					<School name="sunrint" des="real sus wifi" id="sunrint"/>					
					<School name="sunrint" des="real sus wifi" id="sunrint"/>					
					<School name="sunrint" des="real sus wifi" id="sunrint"/>					
				</div>
			</div>
		</div>
	);
};

export default Home;

/**
 * @param {{
*  id: String,
*  name: String,
*  des: String
* }} props 
*/
function School(props) {
   return <a href={`/school/${props.id}`}>
	   <div className={styles.card}>
		   <div className={styles.titleWrapper}>
			   <div className={styles.iconWrapper}>
				   <img src={SchoolIcon} alt="" />
			   </div>
			   <p>{props.name}</p>
		   </div>
		   <p>{props.des}</p>
	   </div>
   </a>
}