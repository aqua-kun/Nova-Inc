const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#00ff00")
  .setAuthor(user.username, user.displayAvatarURL({format: "png"}))
  .setDescription(`****\n\nНа счету ${bal}\nВ банке: ${bank}****`);
  message.channel.send(moneyEmbed)
};

module.exports.config = {
  name:"balance",
  aliases: ["bal", "$", "ebal"]
}