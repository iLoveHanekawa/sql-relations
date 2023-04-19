import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error']
})

async function main() {
    const node = await prisma.node.create({
        data: {
            data: 3,
            parent: {
                connect: {
                    id: 5
                }
            },
            child: {
                connect: {
                    id: 7
                }
            }
        }
    })

    console.log(node)
}

main()