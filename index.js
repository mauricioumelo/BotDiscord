require('dotenv').config();

const interactione = require('./src/events/client/interactionCreate');
const Client = require('./src/structures/Client');

const client = new Client({
    intents:[
        'GUILDS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGES',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES'
    ]
});

client.on('message', function(messageCreate){
    
    const content = message.content
    if( message.author.username == 'Gustavo Cassimiro' && message.author.discriminator =='7604')
    {
        message.reply(`OLA `)
    }

    // if(content.substr(0,1) =='!'){
    //     interaction.run()
    // }
    console.log()
})

client.login(process.env.BOT_TOKEN);