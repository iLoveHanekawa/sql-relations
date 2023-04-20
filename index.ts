import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error']
})

async function main() {
    const member = await prisma.member.findFirst({
        where: {
            id: 1
        },
        select: {
            name: true,
            students: {
                select: {
                    name: true
                }
            }
        }
    })
    console.log(member)
}

main()
