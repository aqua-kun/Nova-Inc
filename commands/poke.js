const Discord = require ('discord.js')
var neko = require('nekos.life');
var {sfw} = new neko();
module.exports.run = async(client, message, args) => {
    const user = message.mentions.users.first() || message.author
    const emb = new Discord.MessageEmbed()
    .setDescription(`****Бади ткнул ${user} <3****`.replace(`${message.author}`, "тебя"))
    .setColor(0x00ff00)
    .setImage(await sfw.poke().then(u => u.url));
    message.channel.send(emb)
}
module.exports.config = {
    name: "poke",
    aliases: [""]
}