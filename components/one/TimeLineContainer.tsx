import {TimeLine} from "./TimeLine";
import styles from "../../styles/components/One/TimeLine.module.scss";

export const TimeLineContainer = ({timeLine}: {timeLine: object[]}) => {
    return (
        <div className={styles.timeLineContainer}>
            {
                timeLine.map((item: object, key: number) => {
                    return <TimeLine key={key} item={item} />
                })
            }
        </div>
    )
}