import {TimeLine} from "./TimeLine";
import styles from "../../styles/components/One/TimeLine.module.scss";
import fonts from "../../styles/Text.module.scss";
import classNames from "classnames";

export const TimeLineContainer = ({timeLine}: {timeLine: object[]}) => {
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