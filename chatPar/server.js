const fastify = require('fastify')({logger: true})
const {Server: WebSocketServer} = require('ws')

const webSocketServer = new WebSocketServer({noServer: true});

webSocketServer.on('connection', (ws) => {

ws.on('message', (message) => {

    webSocketServer.clients.forEach((clients) => {
        client.send(message)
    })
})

})

fastify.server.on('upGrade', (request, socket, head) => {

    webSocketServer.handleUpgrade(request, socket, head, (socket) =>{
        webSocketServer.emit('connection', socket, request)
    })
})

fastify.listen(3000, (err) => {
    if(err){
        fastify.log.error(err)
        process.exit(1)
    }

    fastify.log.info(`Server listening on ${fastify.server.address().port}`)
})
