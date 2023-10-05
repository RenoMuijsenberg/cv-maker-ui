import TopContainer from "../components/topcontainer/topcontainer";
import TimelineContainer from "../components/timelinecontainer/timelinecontainer";
import MiddleContainer from "../components/middlecontainer/middlecontainer";
import Slider from "../components/slider/slider";
import Footer from "../components/footer/footer";
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
    return (
        <>
            {/*Container that displays quickly who you are*/}
            <TopContainer image={user.image} name={user.name} profession={user.profession}/>

            {/*Container that displays information about jobs/school in timeline*/}
            <TimelineContainer timeLine={user.timeline} />

            {/*Container that displays information about person*/}
            <MiddleContainer description={user.description} />

            {/*Container that displays projects you made*/}
            <Slider projectImages={user.project}/>

            {/*Container that display information like you contact information*/}
            <Footer />
        </>
    )
}
