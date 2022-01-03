const Event = require("../../structures/event");

module.exports = class extends Event {
    constructor(client){
        super(client, {
            name: 'ready'
        })
    }

    run = () =>{
        console.log(`Bot ${this.client.user.username} esta ON em ${this.client.guilds.cache.size} Servidores`);
        this.client.registryCommands();
    }
}