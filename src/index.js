require('dotenv').config();
 const TOKEN = process.env.TOKEN;
// console.log(`Token: ${TOKEN}`);

const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`${c.user.tag} is ready spaghetti.`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content === ':frickujed:') {
    message.reply('https://tenor.com/bWONj.gif');
  }
});

client.login(process.env.TOKEN);