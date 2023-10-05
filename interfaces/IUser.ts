import {ITimeLine} from "./ITimeLine";
import {IProject} from "./IProject";
export interface IUser {
	name: string
	image: string
	profession: string
	description: string
	timeline: ITimeLine[]
	project: IProject[]
	birthDate: string
}