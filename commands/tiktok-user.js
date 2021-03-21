const tiktok = require ("tiktok-stats");
module.exports.run = async(client, message, args) => {
    var length = args[0].length
    var argss = args.join(/ +/g);
    argss = argss.replace(/ +/g, "");
    argss = argss.slice(length)
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