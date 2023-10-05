import TimeLine from "../timeline/timeline";
import styles from "./timelinecontainer.module.scss";

export default function TimelineContainer ({timeLine}: {timeLine: object[]}) {
    return (
        <div className={styles.timeLineContainer}>
            {
                timeLine.length > 0 &&
                timeLine.map((item: object, key: number) => {
                    return <TimeLine key={key} item={item} />
                })
            }
        </div>
    )
}