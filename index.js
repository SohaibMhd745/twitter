import Fastify from 'fastify'
import registerRoutes from './api/routes.js'

const app = Fastify({ logger: true })

const start = async () => {
    try {
        await app.listen({ port: 8080 })
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

registerRoutes(app)
start()