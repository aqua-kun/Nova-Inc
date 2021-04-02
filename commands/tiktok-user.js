const tiktok = require ("tiktok-stats");
module.exports.run = async(client, message, args) => {
    const usr = args.join(" ").replace(" ", "")
    try {
    await new tiktok.Stats(usr).getStats().then(s => {
    const emb = new Discord.MessageEmbed()
    .setThumbnail(s.user.avatar)
    .setDescription ("test")
    message.channel.send(emb)
    
    })
    } catch(e) console.log(e)
}
module.exports.config = {
    name: "tiktok-user",
    aliases: ['ttuser', 'tiktokuser', 'tt-user']
}