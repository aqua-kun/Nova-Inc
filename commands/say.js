module.exports.run = async(client, message, args) => {
    const argss = message.content.slice(6).split(";")
    try {
        if(message.member.hasPermission("ADMINISTRATOR")) {
            const embed = new Discord.MessageEmbed()
            .setTitle(argss[0])
            .setDescription(argss[1])
            .setFooter(argss[2])
            .setColor(argss[3]);
            message.channel.send(embed)
        } message.channel.send("У вас нет прав!")
    } catch(e) {message.channel.send(`Команда использована не правильно! Попробуйте так: \`>>say title;description;footer;color\``); message.channel.send(e) }
}
module.exports.config = {
    name: "say",
    aliases: [""]
}