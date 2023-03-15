import Fastify from 'fastify'
import {
    medias,
    mediaTypes,
    statuses,
    statusesMedias,
    messages,
    reactions,
    messageReactions,
    users,
    certifications,
    relations,
    interactions,
    interactionTypes,
    lists,
    listUsers,
    mentions,
    statusesMentions,
    hashtags,
    statusesHashtag,
} from './api/routes.js'

const app = Fastify({ logger: true })

const start = async () => {
    try {
        await app.listen({ port: 8080 })
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

const registerRoutes = () => {
    app.get('/', async (request, reply) => { return {} })
    app.register(medias, { prefix: '/api' })
    app.register(mediaTypes, { prefix: '/api' })
    app.register(statuses, { prefix: '/api' })
    app.register(statusesMedias, { prefix: '/api' })
    app.register(messages, { prefix: '/api' })
    app.register(reactions, { prefix: '/api' })
    app.register(messageReactions, { prefix: '/api' })
    app.register(users, { prefix: '/api' })
    app.register(certifications, { prefix: '/api' })
    app.register(relations, { prefix: '/api' })
    app.register(interactions, { prefix: '/api' })
    app.register(interactionTypes, { prefix: '/api' })
    app.register(lists, { prefix: '/api' })
    app.register(listUsers, { prefix: '/api' })
    app.register(mentions, { prefix: '/api' })
    app.register(statusesMentions, { prefix: '/api' })
    app.register(hashtags, { prefix: '/api' })
    app.register(statusesHashtag, { prefix: '/api' })
}

registerRoutes()
start()