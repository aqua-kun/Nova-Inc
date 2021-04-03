const Discord = require ('discord.js')
var neko = require('nekos.life');
var {sfw} = new neko();
module.exports.run = async(client, message, args) => {
    const user = message.mentions.users.first() || message.author
    const emb = new Discord.MessageEmbed()
    .setDescription(`****${message.author} выглядит самодовольно <3****`)
    .setColor(0x00ff00)
    .setImage(await sfw.smug().then(u => u.url));
    message.channel.send(emb)
}
module.exports.config = {
    name: "smug",
    aliases: [""]
}