const Discord = require ('discord.js')
var neko = require('nekos.life');
var {sfw} = new neko();
module.exports.run = async(client, message, args) => {
    const emb = new Discord.MessageEmbed()
    .setDescription(`****Кристина обняла ` + args.join(" ") ? `<@${message.mentions.users.first()}> <3****` : "тебя <3****")
    .setColor(0x00ff00)
    .setImage(await sfw.hug().url);
    message.channel.send(emb)
}
module.exports.config = {
    name: "hug",
    aliases: [""]
}