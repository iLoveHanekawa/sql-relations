import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {

    const project = await prisma.project.create({
        data: {
            name: "Nextjs"
        }
    })

    const createProject = await prisma.employee.create({
        data: {
            name: 'Bob',
            projects: {
                create: [
                    {
                        project: {
                            connect: {
                                id: 1
                            }
                        }
                    }
                ]
            }
        }
    })
    
    const employee = await prisma.employee.findUnique({
        where: {
            id: 1
        },
        include: {
            projects: {
                include: {
                    project: true
                }
            }
        }
    })
    console.log(employee)
}

main()