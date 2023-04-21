import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error']
})

async function main() {
    const account = await prisma.instagram.findMany({
        where: {
            id: 2
        },
        select: {
            id: true,
            name: true,
            alt: {
                select: {
                    name: true
                }
            },
            followedBy: {
                select: {
                    name: true
                }
            },
            following: {
                select: {
                    name: true
                }
            }
        }
    })

    console.log(account[0].followedBy)
}

main()
