const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {'

  let user = message.author;

  let timeout = 86400000;
  let amount = 200;

  let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setDescription(`****❌  Вы уже забрали свою награду\n\nЗаберите её через {time.hours}час ${time.minutes}мин ${time.seconds}сек ****`);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`****Вы получили ${amount} <a:money:828209980787916830>****`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`daily_${message.guild.id}_${user.id}`, Date.now())


  }
};


module.exports.help = {
  name:"daily",
  aliases: ["bonus"]
}