require('dotenv').config();


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

client.once('ready', function(){
    console.log("bot Logado")
})

client.on('message', function(message){
    
    if( message.author.username == 'Gustavo Cassimiro' && message.author.discriminator =='7604')
    {
        message.reply(`VSF MLK, TE ODEIO`)
    }
 
    console.log(message.author.username)
})

client.login(process.env.BOT_TOKEN);