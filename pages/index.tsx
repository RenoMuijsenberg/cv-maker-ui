import {useEffect, useState} from "react";
import {TopContainer} from "../components/one/TopContainer";
import {TimeLineContainer} from "../components/one/TimeLineContainer";
import {MiddleContainer} from "../components/one/MiddleContainer";
import {SliderContainer} from "../components/one/SliderContainer";
import {FooterContainer} from "../components/one/FooterContainer";


export default function Index() {
    const [name, setName] = useState("Reno Muijsenberg")
    const [image, setImage] = useState("/images/franco.png")
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

    const [description, setDescription] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum")

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
            <TopContainer image={image} name={name} />

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
