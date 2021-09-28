
// Run dotenv


const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const prefix = process.env.PREFIX;
const queue = new Map();

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.once('reconnecting', () => {
  console.log('Reconnecting!');
});

client.once('disconnect', () => {
  console.log('Disconnect!');
});

client.on('messageCreate', async message => {
  
  if (message.author.bot) return;

  if (message.content === 'culo') {
    message.reply('prestas');
  }

  if (!message.content.startsWith(prefix)) return;

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(`${prefix}play`))
  {
    execute(message, serverQueue);
    return;
  }

  else if (message.content.startsWith(`${prefix}skip`)) 
  {
    skip(message, serverQueue);
    return;
  } 
  else if (message.content.startsWith(`${prefix}stop`)) 
  {
    stop(message, serverQueue);
    return;
  }
  else
  {
    message.channel.send("You need to enter a valid command!");
  }
});

async function execute(message, serverQueue) {
  message.channel.send("Executing! " + message);
  console.log(message);
}

function skip(message, serverQueue) {
  message.channel.send("Skipping! " + message);
  console.log(message);
}

function stop(message, serverQueue) {
  message.channel.send("Stopping! " + message);
  console.log(message);
}

client.login(process.env.DISCORD_TOKEN);