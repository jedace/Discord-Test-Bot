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

client.on('interactionCreate', (interaction) => { 
  if (!interaction.isChatInputCommand())  return;
    
  if (interaction.commandName === 'add') { 
    const num1 = interaction.options.get('first-number').value;
    const num2 = interaction.options.get('second-number').value;

    interaction.reply(`The sum is ${num1 + num2}`);
  }
})

client.login(process.env.TOKEN);