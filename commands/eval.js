const Discord = require("discord.js")
const fs = require("fs")
const { inspect } = require('util')
module.exports.run = async (client, message, args) => {
const ownerID = '736174044499673140'


    if(message.author.id == ownerID) {           
                try {
let argss = args.join(' ')
let evaled =  await eval(argss);
let eevaled = typeof evaled;
const tyype = eevaled[0].toUpperCase() + eevaled.slice(1);
if(typeof evaled!== 'string') evaled = require ('util').inspect(evaled, { depth: 0});

evaled == (undefined || null) ? evaled = 'Пустой запрос: ' + evaled : evaled;
const ping = new Date().getTime() - message.createdTimestamp;
const embed = new Discord.MessageEmbed()
.addField('Вывод:', `\`\`\`js\n${evaled}\n\`\`\`\n\`\`\`js\nType: ${typeof evaled}\nВыполнено за: ${ping}ms\n\`\`\``)
.setTimestamp()
message.channel.send(embed)

} catch (e) {
const ping = new Date().getTime() - message.createdTimestamp;
const embed = new Discord.MessageEmbed()
.addField('Вывод:', `\`\`\`js\n❌${e}\n\`\`\`\n\`\`\`js\nType: ${typeof evaled}\nВыполнено за: ${ping}ms\n\`\`\``)
.setTimestamp()
message.channel.send(embed)
    
}
        
    } else {return}
}
module.exports.config = {
  name: "eval",
  aliases: ['e']
}