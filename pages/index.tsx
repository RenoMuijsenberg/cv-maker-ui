import {useEffect, useState} from "react";
import {TopContainer} from "../components/one/TopContainer";
import {TimeLineContainer} from "../components/one/TimeLineContainer";
import {MiddleContainer} from "../components/one/MiddleContainer";
import {SliderContainer} from "../components/one/SliderContainer";
import {FooterContainer} from "../components/one/FooterContainer";
import {getUser} from "../prisma/user";
import {IUser} from "../interfaces/IUser";

export const getServerSideProps = async () => {
    try {
        const user = await getUser("63a59c56da89ad28107a24e3")

        return {
            props: {
                user: user
            }
        }
    } catch(e) {
        console.log(e)
    }
}


export default function Index({user}: {user: IUser}) {
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
            <TopContainer image={user.image} name={user.name} profession={user.profession}/>

            {/*Container that displays information about jobs/school in timeline*/}
            <TimeLineContainer timeLine={user.timeline} />

            {/*Container that displays information about person*/}
            <MiddleContainer description={user.description} />

            {/*Container that displays projects you made*/}
            <SliderContainer projectImages={user.project}/>

            {/*Container that display information like you contact information*/}
            <FooterContainer />
        </>
    )
}
