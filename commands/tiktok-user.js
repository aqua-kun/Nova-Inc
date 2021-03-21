const tiktok = require ("tiktok-stats");
module.exports.run = async(client, message, args) => {
    const stats = await new tiktok.Stats("fouand").getStats().then(s => {
    const emb = new Discord.MessageEmbed()
    .setImage(s.user.avatar)
    message.channel.send(emb)
    })
}
module.exports.config = {
    name: "tiktok-user",
    aliases: ['ttuser', 'tiktokuser', 'tt-user']
}