import {DiagonalLine} from "./DiagonalLine";
import styles from "../../styles/components/One/FooterContainer.module.scss"
import {Socials} from "./Socials";

export const FooterContainer = () => {
    return (
        <>
            <DiagonalLine reverse={false} absolute={false} />
            <div className={styles.footerContainer}>
                <Socials />
            </div>
        </>
    )
}