import classNames from "classnames";
import styles from "../../styles/components/One/Socials.module.scss";
import Link from "next/link";

export const Socials = () => {
	return (
		<div className={styles.social}>
			<Link className={styles.link} target={"_blank"} href={"https://www.instagram.com/reno.muijsenberg/"}><i className={classNames("fa-brands", "fa-instagram", styles.icon)}></i></Link>
			<Link className={styles.link} target={"_blank"} href={"https://github.com/RenoMuijsenberg"}><i className={classNames("fa-brands", "fa-linkedin-in", styles.icon)}></i></Link>
			<Link className={styles.link} target={"_blank"} href={"https://github.com/RenoMuijsenberg"}><i className={classNames("fa-brands", "fa-github-alt", styles.icon)}></i></Link>
		</div>
	)
}