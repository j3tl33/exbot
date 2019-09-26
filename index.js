const Discord = require('discord.js');
const bot = new Discord.Client();
const http = require('http');
require('dotenv/config');
const port = process.env.PORT || 3000;
http.createServer().listen(port);




bot.login("NjI2NzUzODEwMTk4NTYwNzY5.XYzN6w.Vev8x9AHrF_EJccM_Zp2alwJL1w");
