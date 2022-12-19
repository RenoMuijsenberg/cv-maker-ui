import styles from "../styles/components/TimeLine.module.scss";
import text from "../styles/Text.module.scss";

export const TimeLine = ({
	item
}: {
	item: any
}) => {
	return (
		<div className={styles.timeLineContainer}>
			<div className={styles.timeLineItem}>
				<div className={styles.leftTimeLineContainer}>
					<div className={styles.timeLineTextPadding}>
						<p className={text.boldTextMPrimary}>{item.name}</p>
						<p className={text.normalTextSDescription}>{item.course + " - " + item.grade}</p>
					</div>
				</div>
				<div className={styles.rightTimeLineContainer}>
					<div className={styles.timeLineTextPadding}>
						<p className={text.boldTextMPrimary}>{item.time}</p>
					</div>
				</div>
			</div>
		</div>
	)
}