import styles from "../../styles/components/One/TopContainer.module.scss";
import text from "../../styles/Text.module.scss";
import {DiagonalLine} from "./DiagonalLine";
import {Divide as Hamburger} from 'hamburger-react'

export const TopContainer = ({image, name, profession}: {image: string, name: string, profession: string}) => {
    return (
        <div className={styles.topContainer}>
            <div className={styles.hamburger}>
                <Hamburger size={28}/>
            </div>
            <img className={styles.userImage} src={image} alt={`Image of ${name}`}/>
            <div className={styles.introText}>
                <p className={text.headTextL}>{name}</p>
                <p className={text.headTextM}>{profession}</p>
            </div>
            <DiagonalLine reverse={true} absolute={true}/>
        </div>
    )
}