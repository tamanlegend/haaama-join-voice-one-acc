// Attention if You Remove Any Code Project Will Not Work 
//All Copyright By SmSm
const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const client = new Client({
  checkUpdate: false,
}); // All partials are loaded automatically
const { token , idvc,  id , stats , text2, text } = require("./config.json")
client.on('ready', async () => {
  const r = new Discord.RichPresence()
	.setApplicationId(id)// Your Account Id
.setType(stats) // Dont Touch Activity
.setURL('https://www.twitch.tv/#$@') // Dont Touch Url 🖐️ 🚫
.setName(text) // type any Think You Want 
.setDetails(text2) // type any Think You Want
client.user.setActivity(r.toJSON());
console.log(`${client.user.username} Online`)
 })


client.on("ready", async() => {
const { joinVoiceChannel } = require('@discordjs/voice'); 

client.channels.fetch(`${idvc}`).then((channel) => { 
  console.log(`${client.user.tag} Connected To Voice`) 
const VoiceConnection = joinVoiceChannel({ channelId: channel.id, 
guildId: channel.guild.id, 
adapterCreator: channel.guild.voiceAdapterCreator,
selfDeaf: false,
selfMute: false
  }); 
  });
  });
client.login(token)
// Attention if You Remove Any Code Project Will Not Work 
//All Copyright By SmSm
