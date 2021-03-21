const tiktok = require ("tiktok-stats");
module.exports.run = async(client, message, args) => {
    const argss = args.join(" ");
    const stats = await new tiktok.Stats(argss).getStats();
    console.log(stats)
}
module.exports.config = {
    name: "tiktok-user",
    aliases: ['ttuser', 'tiktokuser', 'tt-user']
}