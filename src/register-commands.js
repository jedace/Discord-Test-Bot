require('dotenv').config();
 const TOKEN = process.env.TOKEN;

const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');


const commands = [
    {
        name: 'embed',
        description: 'Calculates for platforms',
    },
];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async () => { 
    try { 
        console.log('Registering commands...');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), 
            { body: commands }
        )
        console.log('Success! Commands Registered.');
    } catch (error) { 
        console.log(`Unexpected error: ${error}`);
    }
})();