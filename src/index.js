require("dotenv").config();
const TOKEN = process.env.TOKEN;
// console.log(`Token: ${TOKEN}`);

const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is ready spaghetti.`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === ":frickujed:") {
    message.reply("https://tenor.com/bWONj.gif");
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "embed") {
    const embed = new EmbedBuilder()
      .setTitle("Greedy companies leave you with:")
      .setColor("Random")
      .addFields(
        { name: "Paypal F&F", value: "Payout: ", inline: true },
        { name: "Paypal G&S", value: "Payout: ", inline: true },
        {
          name: "Ebay",
          value: "Payout: ",
          inline: true,
        }
      );
  }
});
client.on("messageCreate", (message) => {
  if (message.content === "embed") {
    const embed = new EmbedBuilder()
      .setTitle("Greedy companies leave you with:")
      .setColor("Random")
      .addFields(
        { name: "Paypal F&F", value: "Payout: ", inline: true },
        { name: "Paypal G&S", value: "Payout: ", inline: true },
        {
          name: "Ebay",
          value: "Payout: ",
          inline: true,
        }
      );
    message.channel.send({ embeds: [embed] });
  }
});

client.login(process.env.TOKEN);
