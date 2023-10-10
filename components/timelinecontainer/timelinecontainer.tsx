import TimeLine from "../timeline/timeline";
import styles from "./timelinecontainer.module.scss";
import {ITimeLine} from "../../interfaces/ITimeLine";
import {ITimeLineItem} from "../../interfaces/ITimeLineItem";

export default function TimelineContainer ({timeLine}: {timeLine: ITimeLine[]}) {
    return (
        <>
            {
                timeLine.map((value: ITimeLine, key: number) => (
                    <div className={styles.timeLineContainer} key={key}>
                        <h2 className={styles.heading}>{value.title}</h2>
                        {
                            value.timelineitem.length > 0 &&
                            value.timelineitem.map((item: ITimeLineItem, itemKey: number) => (
                                <TimeLine key={itemKey} item={item} />
                            ))
                        }
                    </div>
                ))
            }
        </>
    )
}