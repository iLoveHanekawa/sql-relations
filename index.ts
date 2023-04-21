import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error']
})

async function main() {

    const employee = await prisma.employee.findUnique({
        where: {
            id: 1
        },
        select: {
            name: true,
            projects: {
                select: {
                    project: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        }
    })

    console.log(employee)
}

main()
