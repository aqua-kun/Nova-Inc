const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
    const emb = new Discord.MessageEmbed()
    .setTitle('Ping!')
    .setDescription(`****:ping_pong: Client ping: \`${new Date().getTime() - message.createdTimestamp}\`ms\n\n:green_circle: API ping: \`${client.ws.ping}\`ms****`)
    .setColor(0x00ff00);
    message.channel.send(emb);
};
module.exports.config = {
    name: "ping",
    aliases: [""]
};