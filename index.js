const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => { 
      client.aliases.set(alias, props.config.name);
  
  });
});
})
client.on("ready", async () => {
  console.log(`${client.user.username} is online on ${client.guilds.cache.size} servers!`);
  client.user.setActivity(`In Development...`);
  client.user.setStatus('dnd');
});
  client.on("message", async message => {
    if(message.author.client) return;
    if(message.channel.type === "dm") return;
    let prefix = ">"


    let messageArray = message.content.split(" ");
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;

    if (client.commands.has(cmd)) {
      commandfile = client.commands.get(cmd);
  } else if (client.aliases.has(cmd)) {
    commandfile = client.commands.get(client.aliases.get(cmd));
  }
  
      if (!message.content.startsWith(prefix)) return;

          
  try {
    commandfile.run(client, message, args);
  
  } catch (e) {
  }})


client.login(process.env.TOKEN);
