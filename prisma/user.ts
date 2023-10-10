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
				orderBy: {
					order: 'desc' // Specify 'desc' for descending order
				},
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