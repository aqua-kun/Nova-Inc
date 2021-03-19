module.exports.run = async(client, message, args) => {
    const argss = args.join(" ")
    const tiktok = require('tiktok-app-api');

    let tiktokApp = await tiktok();
    const user = await tiktokApp.getUserByName(argss);
    const userInfo = await tiktokApp.getUserInfo(user);
    console.log(userInfo)

}
module.exports.config = {
    name: "tiktok-user"
    aliases: ['ttuser', 'tiktokuser', 'tt-user']
}