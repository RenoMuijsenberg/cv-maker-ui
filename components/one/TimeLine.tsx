import styles from "../../styles/components/One/TimeLine.module.scss";
import text from "../../styles/Text.module.scss";
import {useEffect, useState} from "react";
import classNames from "classnames";

export const TimeLine = ({
	item
}: {
	item: any
}) => {
	return (
		<div className={styles.timeLineContainer}>
			<div className={styles.timeLineContainer}>
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
			</div>
		</div>
	)
}