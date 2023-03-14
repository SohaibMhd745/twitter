import Fastify from 'fastify'
import { userRoutes } from './api/routes.js'

const app = Fastify({ logger: true })

app.get('/', async (request, reply) => {
    return {}
})

app.register(userRoutes)

const start = async () => {
    try {
        await app.listen({ port: 3000 })
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}
start()