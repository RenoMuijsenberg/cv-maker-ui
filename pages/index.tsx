import {useEffect, useState} from "react";
import {TopContainer} from "../components/one/TopContainer";
import {TimeLineContainer} from "../components/one/TimeLineContainer";
import {MiddleContainer} from "../components/one/MiddleContainer";
import {SliderContainer} from "../components/one/SliderContainer";
import {FooterContainer} from "../components/one/FooterContainer";


export default function Index() {
    const [name, setName] = useState("Reno Muijsenberg")
    const [image, setImage] = useState("/images/franco.png")
    const [profession, setProfession] = useState("Software developer")
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

    const [projectImages, setProjectImages] = useState<object[]>([
        {
            path: "http://place-puppy.com/450x300",
            alt: "Project image"
        },
        {
            path: "http://place-puppy.com/450x300",
            alt: "Project image"
        },
        {
            path: "http://place-puppy.com/450x300",
            alt: "Project image"
        },
        {
            path: "http://place-puppy.com/450x300",
            alt: "Project image"
        },
        {
            path: "http://place-puppy.com/450x300",
            alt: "Project image"
        },
    ])

    const birthDate = new Date("2002-04-15");
    const now = new Date();

    const [description, setDescription] = useState(`Mijn naam is Reno Muijsenberg en ik ben ${Math.abs(now.getFullYear() - birthDate.getFullYear())} jaar oud. Momenteel zit ik op het Fontys in Eindhoven en ben ik aan het leren voor software developer. Sinds vroeger ben ik al veel bezig geweest met computers en hieraan sleutelen, zo vond ik het toen al leuk om te kijken waar mijn oma's Windows XP computer toe in staat was en wat ik hierop kon doen. In mijn vrije tijd ben ik vaak met vrienden, in de sportschool of bezig met computers.`)

    useEffect(() => {
        document.documentElement.style.setProperty('--background-primary', '#ffffff');
        document.documentElement.style.setProperty('--background-secondary', '#034096');
        document.documentElement.style.setProperty('--text-color-primary', '#000000');
        document.documentElement.style.setProperty('--text-color-secondary', '#ffffff');
        document.documentElement.style.setProperty('--accent-color', '#00b8d4');
    }, []);

    return (
        <>
            {/*Container that displays quickly who you are*/}
            <TopContainer image={image} name={name} profession={profession}/>

            {/*Container that displays information about jobs/school in timeline*/}
            <TimeLineContainer timeLine={timeLine} />

            {/*Container that displays information about person*/}
            <MiddleContainer description={description} />

            {/*Container that displays projects you made*/}
            <SliderContainer projectImages={projectImages}/>

            {/*Container that display information like you contact information*/}
            <FooterContainer />
        </>
    )
}
