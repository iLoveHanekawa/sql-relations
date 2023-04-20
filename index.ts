import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error']
})

async function main() {
    const companyMember = await prisma.company.create({
        data: {
            name: 'Arjun',
            managers: {
                create: [
                    {
                        name: "Random name"
                    },
                    {
                        name: "Lil Uzi Vert"
                    }
                ]
            },
            employees: {
                create: [
                    {
                        name: "Future"
                    }
                ]
            }
        },
        select: {
            name: true,
            managers: {
                select: {
                    name: true
                }
            },
            employees: {
                select: {
                    name: true
                }
            }
        }
    })
    console.log(companyMember)
}

main()
