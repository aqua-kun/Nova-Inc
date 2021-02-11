module.exports.run = async(client, message, args) => {
   let ping = new Date().getTime()
   let APIping = client.ws.ping
   message.channel.send(`Commands reply: \`${ping}\`\nWebSocket ping: \`${APIping}\``)
}
module.exports.config = {
    name: "ping",
    aliases: ['']
}