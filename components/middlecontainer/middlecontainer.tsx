import styles from "./middlecontainer.module.scss";
import text from "../../styles/Text.module.scss";
import DiagonalLine from "../diagonalline/diagonalline";
import classNames from "classnames";

export default function MiddleContainer({description}: {description: string}) {
    return (
        <div className={styles.descriptionContainer}>
            <DiagonalLine reverse={false} absolute={false}/>
            <div className={styles.description}>
                <h2 className={text.headTextM}>Over Mezelf</h2>
                <p className={classNames(styles.descriptionText, text.normalTextSSecondary)}>{description}</p>
            </div>
            <DiagonalLine reverse={true} absolute={false}/>
        </div>
    )
}