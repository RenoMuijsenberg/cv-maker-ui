import styles from "../../styles/components/One/MiddleContainer.module.scss";
import text from "../../styles/Text.module.scss";
import {DiagonalLine} from "./DiagonalLine";
import classNames from "classnames";

export const MiddleContainer = ({description}: {description: string}) => {
    return (
        <div className={styles.descriptionContainer}>
            <DiagonalLine reverse={false} absolute={false}/>
            <div className={styles.description}>
                <p className={classNames(styles.descriptionText, text.normalTextSSecondary)}>{description}</p>
            </div>
            <DiagonalLine reverse={true} absolute={false}/>
        </div>
    )
}