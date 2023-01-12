import styles from "../../styles/components/One/TopContainer.module.scss";
import text from "../../styles/Text.module.scss";
import {DiagonalLine} from "./DiagonalLine";
import {Divide as Hamburger} from 'hamburger-react'
import {useEffect, useState} from "react";
import classNames from "classnames";

export const TopContainer = ({image, name, profession}: {image: string, name: string, profession: string}) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        //Open menu here?
        console.log(isOpen)
    }, [isOpen])

    return (
        <>
            {/*Menu*/}
            <div className={classNames(styles.menu, isOpen && styles.menuOpen)}>
                <ul>
                    <li>Over mij</li>
                    <hr/>
                    <li>Projecten</li>
                    <hr/>
                    <li>Skills</li>
                    <hr/>
                </ul>
            </div>

            {/*Header*/}
            <div className={styles.topContainer}>
                <div className={classNames(styles.hamburger, isOpen && styles.fixed)}>
                    <Hamburger color={isOpen ? "black" : "white"} duration={.3} size={28} onToggle={(toggled: boolean) => {
                        if (toggled) {
                            setIsOpen(true)
                        } else {
                            setIsOpen(false)
                        }
                    }
                    }/>
                </div>
                <img className={styles.userImage} src={image} alt={`Image of ${name}`}/>
                <div className={styles.introText}>
                    <p className={text.headTextL}>{name}</p>
                    <p className={text.headTextM}>{profession}</p>
                </div>
                <DiagonalLine reverse={true} absolute={true}/>
            </div>
        </>
    )
}