// /prisma/user.js
import prisma from './prisma'
import {any} from "prop-types";

// READ
export const getAllUsers = async () => {
	return prisma.user.findMany({});
}

export const getUser = async (id: string) => {
	return prisma.user.findUnique({
		where: {id}
	});
}