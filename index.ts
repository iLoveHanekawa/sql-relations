import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error']
})

async function main() {
    // const person = await prisma.human.create({
    //     data: {
    //         name: "Arjun",
    //         friends: {
    //             create: [
    //                 {
    //                     enemy: {
    //                         create: {
    //                             name: "Uzi"
    //                         },
    //                     }
    //                 },
    //                 {
    //                     enemy: {
    //                         create: {
    //                             name: "Nudy"
    //                         }
    //                     }
    //                 }
    //             ]
    //         },
    //         enemies: {
    //             create: [
    //                 {
    //                     friend: {
    //                         create: {
    //                             name: "Baby"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     friend: {
    //                         create: {
    //                             name: "Future"
    //                         }
    //                     }
    //                 }
    //             ]
    //         }
    //     },
    //     select: {
    //         name: true,
    //         friends: true,
    //         enemies: true
    //     }
    // })

    const humans = await prisma.human.deleteMany()
    // console.log(person)
    
}

main()
