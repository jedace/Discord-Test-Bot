require('dotenv').config();
 const TOKEN = process.env.TOKEN;

const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'add',
        description: 'Adds two numbers',
        options: [
            { 
                name: 'first-number',
                description: 'The first number',
                type: ApplicationCommandOptionType.Number,
                choices: [
                    { 
                        name: 'one',
                        value: 1,
                    },
                    { 
                        name: 'two',
                        value: 2,
                    },
                ],
                required: true,
            },
            { 
                name: 'second-number',
                description: 'The second number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ]
    },
];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async () => { 
    try { 
        console.log('Registering comands...');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), 
            { body: commands }
        )
        console.log('Success! Commands Registered.');
    } catch (error) { 
        console.log('Unexpected error: ${error}');
    }
})();