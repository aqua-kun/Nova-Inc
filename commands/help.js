const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('m!'))return;  


    let embed = new Discord.RichEmbed()
    .setTitle("» Help / Economy « [3 / 5]")
    .setDescription("****[...] - optional argument****\n****<...> - required argument****")
    .addField("Economy", ":small_blue_diamond: work \n:small_blue_diamond: beg \n:small_blue_diamond: rob \n:small_blue_diamond: pay balance \n:small_blue_diamond: profile \n:small_blue_diamond: withdraw \n:small_blue_diamond: deposit \n:small_blue_diamond: daily \n:small_blue_diamond: weekly \n:small_blue_diamond: store \n:small_blue_diamond: buy \n:small_blue_diamond: sell")
    .addField("Gambling", "roulette slots")
    .addField("Economy Extra Commands", "storeinfo [item]")
    .setColor("#FFFFFF")
    message.channel.send(embed)




}

module.exports.help = {
  name:"help",
  aliases: [""]
}