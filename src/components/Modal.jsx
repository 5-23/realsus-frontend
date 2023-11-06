import styles from "../css/Modal.module.css";

const Modal = () => {
	return (
		<div className={styles.container}>
			<div className={styles.img}></div>
			<div className={styles.name}>seojk523</div>
			<div className={styles.content}>
				<ul>
					<li>5번 질문</li>
					<li>2번 질문</li>
					<li>3번 고정</li>
				</ul>
			</div>
			<div className={styles.more}>자세히보기</div>
		</div>
	);
};

export default Modal;
