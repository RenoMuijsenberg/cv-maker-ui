import prisma from './prisma'

export const getAllUsers = async () => {
	return prisma.user.findMany({});
}

export const getUser = async (id: string) => {
	return prisma.user.findUnique({
		where: {id},
		include: {
			project: true,
			timeline: {
				include: {
					timelineitem: {
						orderBy: {
							time: 'desc'
						}
					}
				}
			}
		}
	})
}