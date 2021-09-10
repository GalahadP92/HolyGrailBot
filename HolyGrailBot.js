
// Run dotenv


const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('culo');
    }
  });

client.login(process.env.DISCORD_TOKEN);