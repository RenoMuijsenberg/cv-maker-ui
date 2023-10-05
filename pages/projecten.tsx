import TopContainer from "../components/topcontainer/topcontainer";
import {getUser} from "../prisma/user";
import {IUser} from "../interfaces/IUser";
import styles from "../styles/projects.module.scss"

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


export default function Projecten({user}: {user: IUser}) {
	//View to return
	return (
		<>
			<TopContainer image={user.image} name={user.name} profession={user.profession}/>

			<h1 className={styles.projectTitle}>Projecten</h1>
			<div className={styles.projectContainer}>
				<div className={styles.project}>
					<div className={styles.projectImage}>
						<img src="https://placedog.net/300/300" alt=""/>
						<div className={styles.projectDesc}>
							<h2>Project naam</h2>
						</div>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.projectImage}>
						<img src="https://placedog.net/300/300" alt=""/>
						<div className={styles.projectDesc}>
							<h2>Project naam</h2>
						</div>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.projectImage}>
						<img src="https://placedog.net/300/300" alt=""/>
						<div className={styles.projectDesc}>
							<h2>Project naam</h2>
						</div>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.projectImage}>
						<img src="https://placedog.net/300/300" alt=""/>
						<div className={styles.projectDesc}>
							<h2>Project naam</h2>
						</div>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.projectImage}>
						<img src="https://placedog.net/300/300" alt=""/>
						<div className={styles.projectDesc}>
							<h2>Project naam</h2>
						</div>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.projectImage}>
						<img src="https://placedog.net/300/300" alt=""/>
						<div className={styles.projectDesc}>
							<h2>Project naam</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
