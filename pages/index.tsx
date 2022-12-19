import styles from '../styles/Index.module.scss'
import text from '../styles/Text.module.scss'
import {useEffect, useState} from "react";
import {TimeLine} from "../components/TimeLine";
import {DiagonalLine} from "../components/DiagonalLine";
import classNames from "classnames";
import {Socials} from "../components/Socials";


export default function Index() {
    const [name, setName] = useState("Reno Muijsenberg")
    const [imagePath, setImagePath] = useState("/images/franco.png")
    const [timeLine, setTimeLine] = useState<object[]>([
        {
            name: "Fontys Eindhoven",
            time: "2021 - heden",
            grade: "Bachelor",
            course: "ICT Software"
        },
        {
            name: "ROC Ter AA Helmond",
            time: "2018 - 2020",
            grade: "MBO 4",
            course: "Applicatie- en Mediaontwikkelaar"
        },
        {
            name: "Het Bouwens van der Boijecollege",
            time: "2015 - 2018",
            grade: "VMBO-Kader",
            course: "Horeca"
        },
    ])
    const [description, setDescription] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum")

    useEffect(() => {
        document.documentElement.style.setProperty('--background-primary', '#ffffff');
        document.documentElement.style.setProperty('--background-secondary', '#034096');
        document.documentElement.style.setProperty('--text-color-primary', '#000000');
        document.documentElement.style.setProperty('--text-color-secondary', '#ffffff');
        document.documentElement.style.setProperty('--accent-color', '#00b8d4');
    }, []);

    return (
        <div className={styles.container}>
            {/*Container that displays quickly who you are*/}
            <div className={styles.topContainer}>
                <img className={styles.userImage} src={imagePath} alt={`Image of ${name}`}/>
                <div>
                    <p className={text.headTextL}>{name}</p>
                    <Socials />
                </div>
                <DiagonalLine reverse={true} absolute={true}/>
            </div>

            {/*Container that displays information about jobs/school in timeline*/}
            <div className={styles.timeLineContainer}>
                {
                    timeLine.map((item: object, key: number) => {
                        return <TimeLine key={key} item={item} />
                    })
                }
            </div>

            {/*Container that displays information about person*/}
            <div className={styles.descriptionContainer}>
                <DiagonalLine reverse={false} absolute={false}/>
                <div className={styles.description}>
                    <p className={classNames(styles.descriptionText, text.normalTextSSecondary)}>{description}</p>
                </div>
                <DiagonalLine reverse={true} absolute={false}/>
            </div>

        </div>
    )
}
