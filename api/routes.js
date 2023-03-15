import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

function formatResponse(content, statusCode) {
    return { content, statusCode, }
}

function medias(app, options, done) {
    app.get('/medias', async (request, reply) => {
        const content = await prisma.media.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/medias/:id', async (request, reply) => {
        const content = await prisma.media.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/medias', async (request, reply) => {
        const content = await prisma.media.create({
            data: {
                name: request.body.name,
                content: request.body.content,
                typeId: request.body.typeId,
            }
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/medias/:id', async (request, reply) => {
        const content = await prisma.media.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                name: request.body.name,
                content: request.body.content,
                typeId: request.body.typeId,
            }
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/medias/:id', async (request, reply) => {
        const content = await prisma.media.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

function mediaTypes(app, options, done) {
    app.get('/mediatypes', async (request, reply) => {
        const content = await prisma.mediaType.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/mediatypes/:id', async (request, reply) => {
        const content = await prisma.mediaType.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/mediatypes', async (request, reply) => {
        const content = await prisma.mediaType.create({
            data: {
                name: request.body.name,
            }
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/mediatypes/:id', async (request, reply) => {
        const content = await prisma.mediaType.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                name: request.body.name,
            }
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/mediatypes/:id', async (request, reply) => {
        const content = await prisma.mediaType.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

function statuses(app, options, done) {
    app.get('/status', async (request, reply) => {
        const content = await prisma.status.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/status/:id', async (request, reply) => {
        const content = await prisma.status.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/status', async (request, reply) => {
        const content = await prisma.status.create({
            data: {
                content: request.body.content,
                authorId: request.body.authorId,
                parentId: request.body.parentId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/status/:id', async (request, reply) => {
        const content = await prisma.status.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                content: request.body.content,
                authorId: request.body.authorId,
                parentId: request.body.parentId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/status/:id', async (request, reply) => {
        const content = await prisma.status.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

function statusesMedias(app, options, done) {
    app.get('/statusMedias', async (request, reply) => {
        const content = await prisma.statusMedia.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/statusMedias/:id', async (request, reply) => {
        const content = await prisma.statusMedia.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/statusMedias', async (request, reply) => {
        const content = await prisma.statusMedia.create({
            data: {
                statusId: request.body.statusId,
                mediaId: request.body.mediaId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/statusMedias/:id', async (request, reply) => {
        const content = await prisma.statusMedia.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                statusId: request.body.statusId,
                mediaId: request.body.mediaId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/statusMedias/:id', async (request, reply) => {
        const content = await prisma.statusMedia.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

function messages(app, options, done) {
    app.get('/messages', async (request, reply) => {
        const content = await prisma.message.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/messages/:id', async (request, reply) => {
        const content = await prisma.message.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/messages', async (request, reply) => {
        const content = await prisma.message.create({
            data: {
                content: request.body.content,
                senderId: request.body.senderId,
                recipientId: request.body.recipientId,
                mediaId: request.body.mediaId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/messages/:id', async (request, reply) => {
        const content = await prisma.message.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                content: request.body.content,
                senderId: request.body.senderId,
                recipientId: request.body.recipientId,
                mediaId: request.body.mediaId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/messages/:id', async (request, reply) => {
        const content = await prisma.message.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

function reactions(app, options, done) {
    app.get('/reactions', async (request, reply) => {
        const content = await prisma.reaction.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/reactions/:id', async (request, reply) => {
        const content = await prisma.reaction.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/reactions', async (request, reply) => {
        const content = await prisma.reaction.create({
            data: {
                name: request.body.name,
                imageId: request.body.imageId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/reactions/:id', async (request, reply) => {
        const content = await prisma.reaction.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                name: request.body.name,
                imageId: request.body.imageId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/reactions/:id', async (request, reply) => {
        const content = await prisma.reaction.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

function messageReactions(app, options, done) {
    app.get('/messageReactions', async (request, reply) => {
        const content = await prisma.messageReaction.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/messageReactions/:id', async (request, reply) => {
        const content = await prisma.messageReaction.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/messageReactions', async (request, reply) => {
        const content = await prisma.messageReaction.create({
            data: {
                messageId: request.body.messageId,
                reactionId: request.body.reactionId,
                authorId: request.body.authorId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/messageReactions/:id', async (request, reply) => {
        const content = await prisma.messageReaction.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                messageId: request.body.messageId,
                reactionId: request.body.reactionId,
                authorId: request.body.authorId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/messageReactions/:id', async (request, reply) => {
        const content = await prisma.messageReaction.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

function users(app, options, done) {
    app.get('/users', async (request, reply) => {
        const content = await prisma.user.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/users/:id', async (request, reply) => {
        const content = await prisma.user.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/users', async (request, reply) => {
        const content = await prisma.user.create({
            data: {
                name: request.body.name,
                username: request.body.username,
                email: request.body.email,
                password: request.body.password,
                phone: request.body.phone,
                birthdate: request.body.birthdate,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/users/:id', async (request, reply) => {
        const content = await prisma.user.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                name: request.body.name,
                username: request.body.username,
                email: request.body.email,
                password: request.body.password,
                phone: request.body.phone,
                bio: request.body.bio,
                avatarId: request.body.avatarId,
                bannerId: request.body.bannerId,
                location: request.body.location,
                website: request.body.website,
                birthdate: request.body.birthdate,
                certificationId: request.body.certificationId,
                pinnedStatusId: request.body.pinnedStatusId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/users/:id', async (request, reply) => {
        const content = await prisma.user.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

function certifications(app, options, done) {
    app.get('/certifications', async (request, reply) => {
        const content = await prisma.certification.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/certifications/:id', async (request, reply) => {
        const content = await prisma.certification.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/certifications', async (request, reply) => {
        const content = await prisma.certification.create({
            data: {
                name: request.body.name,
                color: request.body.color,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/certifications/:id', async (request, reply) => {
        const content = await prisma.certification.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                name: request.body.name,
                color: request.body.color,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/certifications/:id', async (request, reply) => {
        const content = await prisma.certification.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

function relations(app, options, done) {
    app.get('/relations', async (request, reply) => {
        const content = await prisma.relation.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/relations/:id', async (request, reply) => {
        const content = await prisma.relation.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/relations', async (request, reply) => {
        const content = await prisma.relation.create({
            data: {
                followerId: request.body.followerId,
                followedId: request.body.followedId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/relations/:id', async (request, reply) => {
        const content = await prisma.relation.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                followerId: request.body.followerId,
                followedId: request.body.followedId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/relations/:id', async (request, reply) => {
        const content = await prisma.relation.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

function interactions(app, options, done) {
    app.get('/interactions', async (request, reply) => {
        const content = await prisma.interaction.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/interactions/:id', async (request, reply) => {
        const content = await prisma.interaction.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/interactions', async (request, reply) => {
        const content = await prisma.interaction.create({
            data: {
                authorId: request.body.authorId,
                statusId: request.body.statusId,
                type: request.body.type,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/interactions/:id', async (request, reply) => {
        const content = await prisma.interaction.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                authorId: request.body.authorId,
                statusId: request.body.statusId,
                type: request.body.type,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/interactions/:id', async (request, reply) => {
        const content = await prisma.interaction.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

function interactionTypes(app, options, done) {
    app.get('/interactionTypes', async (request, reply) => {
        const content = await prisma.interactionType.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/interactionTypes/:id', async (request, reply) => {
        const content = await prisma.interactionType.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/interactionTypes', async (request, reply) => {
        const content = await prisma.interactionType.create({
            data: {
                name: request.body.name,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/interactionTypes/:id', async (request, reply) => {
        const content = await prisma.interactionType.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                name: request.body.name,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/interactionTypes/:id', async (request, reply) => {
        const content = await prisma.interactionType.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

function lists(app, options, done) {
    app.get('/lists', async (request, reply) => {
        const content = await prisma.list.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/lists/:id', async (request, reply) => {
        const content = await prisma.list.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/lists', async (request, reply) => {
        const content = await prisma.list.create({
            data: {
                name: request.body.name,
                authorId: request.body.authorId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/lists/:id', async (request, reply) => {
        const content = await prisma.list.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                name: request.body.name,
                authorId: request.body.authorId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/lists/:id', async (request, reply) => {
        const content = await prisma.list.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

function listUsers(app, options, done) {
    app.get('/listUsers', async (request, reply) => {
        const content = await prisma.listUser.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/listUsers/:id', async (request, reply) => {
        const content = await prisma.listUser.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/listUsers', async (request, reply) => {
        const content = await prisma.listUser.create({
            data: {
                listId: request.body.listId,
                userId: request.body.userId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/listUsers/:id', async (request, reply) => {
        const content = await prisma.listUser.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                listId: request.body.listId,
                userId: request.body.userId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/listUsers/:id', async (request, reply) => {
        const content = await prisma.listUser.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

function mentions(app, options, done) {
    app.get('/mentions', async (request, reply) => {
        const content = await prisma.mention.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/mentions/:id', async (request, reply) => {
        const content = await prisma.mention.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/mentions', async (request, reply) => {
        const content = await prisma.mention.create({
            data: {
                authorId: request.body.authorId,
                targetId: request.body.targetId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/mentions/:id', async (request, reply) => {
        const content = await prisma.mention.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                authorId: request.body.authorId,
                targetId: request.body.targetId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/mentions/:id', async (request, reply) => {
        const content = await prisma.mention.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

function statusesMentions(app, options, done) {
    app.get('/statusesMentions', async (request, reply) => {
        const content = await prisma.statusMention.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/statusesMentions/:id', async (request, reply) => {
        const content = await prisma.statusMention.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/statusesMentions', async (request, reply) => {
        const content = await prisma.statusMention.create({
            data: {
                statusId: request.body.statusId,
                mentionId: request.body.mentionId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/statusesMentions/:id', async (request, reply) => {
        const content = await prisma.statusMention.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                statusId: request.body.statusId,
                mentionId: request.body.mentionId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/statusesMentions/:id', async (request, reply) => {
        const content = await prisma.statusMention.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

function hashtags(app, options, done) {
    app.get('/hashtags', async (request, reply) => {
        const content = await prisma.hashtag.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/hashtags/:id', async (request, reply) => {
        const content = await prisma.hashtag.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/hashtags', async (request, reply) => {
        const content = await prisma.hashtag.create({
            data: {
                name: request.body.name,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/hashtags/:id', async (request, reply) => {
        const content = await prisma.hashtag.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                name: request.body.name,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/hashtags/:id', async (request, reply) => {
        const content = await prisma.hashtag.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

function statusesHashtag(app, options, done) {
    app.get('/statusesHashtag', async (request, reply) => {
        const content = await prisma.statusHashtag.findMany()
        return formatResponse(content, reply.statusCode)
    })

    app.get('/statusesHashtag/:id', async (request, reply) => {
        const content = await prisma.statusHashtag.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.post('/statusesHashtag', async (request, reply) => {
        const content = await prisma.statusHashtag.create({
            data: {
                statusId: request.body.statusId,
                hashtagId: request.body.hashtagId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.put('/statusesHashtag/:id', async (request, reply) => {
        const content = await prisma.statusHashtag.update({
            where: {
                id: Number(request.params.id),
            },
            data: {
                statusId: request.body.statusId,
                hashtagId: request.body.hashtagId,
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    app.delete('/statusesHashtag/:id', async (request, reply) => {
        const content = await prisma.statusHashtag.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return formatResponse(content, reply.statusCode)
    })

    done()
}

export {
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
}