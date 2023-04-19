import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const actorOne = await prisma.actor.create({
        data: {
            name: 'Jake Gyllenhaal'
        }
    })

    const actorTwo = await prisma.actor.create({
        data: {
            name: 'Maggie Gyllenhaal'
        }
    })

    const movie = await prisma.movie.create({
        data: {
            name: 'Donnie Darko',
            actors: {
                connect: [
                    {
                        id: 1
                    },
                    {
                        id: 2
                    }
                ]
            }
        }
    })

    console.log(movie)
}

main()