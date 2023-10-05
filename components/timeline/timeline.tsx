import styles from "../timelinecontainer/timelinecontainer.module.scss";
import text from "../../styles/Text.module.scss";
import classNames from "classnames";

export default function TimeLine ({
	item
}: {
	item: any
})  {
	return (
		<div className={styles.timeLineItem}>
			<div className={styles.leftTimeLineContainer}>
				<div className={classNames(styles.timeLineTextPadding, styles.animateLeft)}>
					<p className={text.boldTextMPrimary}>{item.name}</p>
					<p className={text.normalTextSDescription}>{item.course + " - " + item.grade}</p>
				</div>
			</div>
			<div className={styles.rightTimeLineContainer}>
				<div className={classNames(styles.timeLineTextPadding, styles.animateRight)}>
					<p className={text.boldTextMPrimary}>{item.time}</p>
				</div>
			</div>
		</div>
	)
}