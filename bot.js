const Discord = require("discord.js");
const client = new Discord.Client();
//////// Playing & Streaming 
client.on("ready", () =>{
  console.log(` Online bot ${client.user.tag}!`);
  client.user.setPresence({
    status: "idle",
    game: {
       name: "Under Development|By ZeroHost",
       type: "WATCHING",
    }
  });
});
///////////////////////
client.login("NzIzODUyMTM4NjEwMDMyNzIw.Xu3p1g.RYpFF2AWc7ap6Sfy3tV4zKzq5io");
