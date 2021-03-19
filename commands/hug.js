const Discord = require ('discord.js')
var neko = require('nekos.life');
var {sfw} = new neko();
module.exports.run = async(client, message, args) => {
    const user = message.mentions.users.first() || message.author
    const emb = new Discord.MessageEmbed()
    .setDescription(`****Кристина обняла <@${user}> <3****`.replace(`<@${message.author}>`, "тебя"))
    .setColor(0x00ff00)
    .setImage(await sfw.hug().url);
    message.channel.send(emb)
    message.channel.send(await sfw.hug())
}
module.exports.config = {
    name: "hug",
    aliases: [""]
}