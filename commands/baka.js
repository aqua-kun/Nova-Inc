const Discord = require ('discord.js')
var neko = require('nekos.life');
var {sfw} = new neko();
module.exports.run = async(client, message, args) => {
    const user = message.mentions.users.first() || 'кого-то'
    if(message.mentions.users.first() == message.author) return message.channel.send('ты не дурак <3')
    const emb = new Discord.MessageEmbed()
    .setDescription(`****<@${message.author.id}> обозвал дураком ${user}<3****`)
    .setColor(0x00ff00)
    .setImage(await sfw.baka().then(u => u.url));
    message.channel.send(emb)
    
}
module.exports.config = {
    name: "baka",
    aliases: [""]
} 