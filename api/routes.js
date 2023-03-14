import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

function userRoutes(app, options, done) {
    app.get('/users', async (request, reply) => {
        const users = await prisma.user.findMany()
        return users
    })

    app.get('/users/:id', async (request, reply) => {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return user
    })

    app.post('/users', async (request, reply) => {
        const user = await prisma.user.create({
            data: {
                name: request.body.name,
                email: request.body.email,
            },
        })
        return user
    })

    app.put('/users/:id', async (request, reply) => {
        const user = await prisma.user.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                name: request.body.name,
                email: request.body.email,
            },
        })
        return user
    })

    app.delete('/users/:id', async (request, reply) => {
        const user = await prisma.user.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return user
    })

    done()
}

export { userRoutes }