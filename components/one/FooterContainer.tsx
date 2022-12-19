import {DiagonalLine} from "./DiagonalLine";
import styles from "../../styles/components/One/FooterContainer.module.scss"

export const FooterContainer = () => {
    return (
        <>
            <DiagonalLine reverse={false} absolute={false} />
            <div className={styles.footerContainer}>

            </div>
        </>
    )
}