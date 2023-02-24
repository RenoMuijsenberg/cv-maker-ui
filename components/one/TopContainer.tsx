import styles from "../../styles/components/One/TopContainer.module.scss";
import text from "../../styles/Text.module.scss";
import {DiagonalLine} from "./DiagonalLine";
import {Divide as Hamburger} from 'hamburger-react'
import {useEffect, useState} from "react";
import classNames from "classnames";
import {Socials} from "./Socials";
import Link from "next/link";

export const TopContainer = ({image, name, profession}: {image: string, name: string, profession: string}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/*Menu*/}
            <div className={classNames(styles.menu, isOpen && styles.menuOpen)}>
                <ul>
                    <Link href={"/"}><li>Home</li></Link>
                    <hr/>
                    <Link href={"/projecten"}><li>Projecten</li></Link>
                    <hr/>
                    <Link href={"/skills"}><li>Skills</li></Link>
                    <hr/>
                </ul>

                <div className={styles.menuSocials}>
                    <Socials />
                    <Link className={styles.link} href={"mailto:Renomuis12@gmail.com"}>Renomuis12@gmail.com</Link>
                    <p className={classNames(text.normalTextSDescription, styles.copyRight)}>©Reno Muijsenberg</p>
                </div>
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