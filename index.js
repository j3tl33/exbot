const Discord = require('discord.js');
const bot = new Discord.Client();
const http = require('http');
require('dotenv/config')
const port = process.env.PORT || 3000;
http.createServer().listen(port);
const token = process.env.TOKEN;
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});
bot.on('message', message => {
    
if(message.content === 'password')
var role = message.guild.roles.find(role => role.name === "Member");
message.member.addRole(role);
})
bot.on('error', err => {
  console.log(err)
})

bot.login(TOKEN);
