const Command = require('../../structures/Command');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name:'ping',
            description: 'Mostra o ping do BOT',
        })
    }

    run = (interaction) => {
        interaction.reply("pong!")
    }
}
