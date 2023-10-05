import DiagonalLine from "../diagonalline/diagonalline";
import styles from "./footer.module.scss"
import text from "../../styles/Text.module.scss"
import Socials from "../socials/socials";
import Link from "next/link";

export default function Footer() {
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