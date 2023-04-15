const { Client, GatewayIntentBits, Message, InteractionType } = require("discord.js");

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent,
    ], 
}); 

client.on('messageCreate', (message)=> {
    if(message.author.bot) return;
    if (message.content.startsWith('create')){
        const url=message.content.split('create')[1];
        return message.reply({
            content:"Generating Short ID for "+url,
        });
    }
    message.reply({
        content:"Hey its me Disco ;)",
    });
});

client.on('interactionCreate', (interaction) =>{
    console.log(interaction);
    interaction.reply("Pong...!")
});

client.login(
  "MTA5Njg0NTY4NjA1MTQ0Njc4OA.Gj2NjD.4z6MeVR7VE1hqXTLbN_qba0PHucD2Yn7HZAHfg"
);