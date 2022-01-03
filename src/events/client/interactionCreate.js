const Event = require("../../structures/event");

module.exports = class extends Event {
    constructor(client){
        super(client, {
            name: 'interactioncreator'
        })
    }

    run = () =>{
        if(interaction.isCommand()){
            const cmd = this.client.commands.find(c => c.name === interaction.commandName);
            
            if(cmd) cmd.run(interaction)
        }
    }
}