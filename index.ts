import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            profile: {
                connect: {
                    id: 2
                }
            }
        }
    })

    const users = await prisma.user.findMany()
    console.log(users)
}

main()