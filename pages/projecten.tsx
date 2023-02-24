import {useEffect, useState} from "react";
import {TopContainer} from "../components/one/TopContainer";
import {getUser} from "../prisma/user";
import {IUser} from "../interfaces/IUser";
import styles from "../styles/components/One/ProjectContainer.module.scss"

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
	//Set styles of page
	useEffect(() => {
		document.documentElement.style.setProperty('--background-primary', '#ffffff');
		document.documentElement.style.setProperty('--background-secondary', '#034096');
		document.documentElement.style.setProperty('--text-color-primary', '#000000');
		document.documentElement.style.setProperty('--text-color-secondary', '#ffffff');
		document.documentElement.style.setProperty('--accent-color', '#00b8d4');
	}, []);

	//View to return
	return (
		<>
			{/*Container that displays quickly who you are*/}
			<TopContainer image={user.image} name={user.name} profession={user.profession}/>

			<h1 className={styles.projectTitle}>Projecten</h1>
			<div className={styles.projectContainer}>
				<div className={styles.project}>
					<div className={styles.projectImage}>
						<img src="http://place-puppy.com/300x300" alt=""/>
						<div className={styles.projectDesc}>
							<h2>Project naam</h2>
							{/*	TODO": skills*/}
						</div>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.projectImage}>
						<img src="http://place-puppy.com/300x300" alt=""/>
						<div className={styles.projectDesc}>
							<h2>Project naam</h2>
							{/*	TODO": skills*/}
						</div>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.projectImage}>
						<img src="http://place-puppy.com/300x300" alt=""/>
						<div className={styles.projectDesc}>
							<h2>Project naam</h2>
							{/*	TODO": skills*/}
						</div>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.projectImage}>
						<img src="http://place-puppy.com/300x300" alt=""/>
						<div className={styles.projectDesc}>
							<h2>Project naam</h2>
							{/*	TODO": skills*/}
						</div>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.projectImage}>
						<img src="http://place-puppy.com/300x300" alt=""/>
						<div className={styles.projectDesc}>
							<h2>Project naam</h2>
							{/*	TODO": skills*/}
						</div>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.projectImage}>
						<img src="http://place-puppy.com/300x300" alt=""/>
						<div className={styles.projectDesc}>
							<h2>Project naam</h2>
							{/*	TODO": skills*/}
						</div>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.projectImage}>
						<img src="http://place-puppy.com/300x300" alt=""/>
						<div className={styles.projectDesc}>
							<h2>Project naam</h2>
							{/*	TODO": skills*/}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
