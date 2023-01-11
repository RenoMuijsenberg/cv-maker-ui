import {DiagonalLine} from "./DiagonalLine";
import styles from "../../styles/components/One/FooterContainer.module.scss"
import text from "../../styles/Text.module.scss"
import {Socials} from "./Socials";
import Link from "next/link";

export const FooterContainer = () => {
    return (
        <>
            <DiagonalLine reverse={false} absolute={false} />
            <div className={styles.footerContainer}>
                <Socials />
                <Link className={styles.link} href={"mailto:Renomuis12@gmail.com"}>Renomuis12@gmail.com</Link>
                <p className={text.normalTextSDescription}>©Reno Muijsenberg</p>
            </div>
        </>
    )
}