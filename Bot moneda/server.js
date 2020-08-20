const Discord = require('discord.js');
const client = new Discord.Client();

function presence(){
   client.user.setPresence({
      status: "online",
      game: {
         name: "Tirar Moneda",
         type: "PLAYING"
      }
   });
}
 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ activity: { name: 'TIRAR MONEDA',type:"PLAYING" }, status: 'online' })
 });
 
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pajerito de mierda');
  }
});

client.on("message" , msg => {
    var Mensajes = ["Cara", "Cruz"];
    var aleatorio = Math.floor(Math.random()*(Mensajes.length));
    if(msg.content.startsWith("tirar moneda")){
       msg.channel.send(Mensajes[aleatorio]);
      }
  });
 
client.login('NzQzMTczMDg5MDUxMDE3MzI4.XzQz3w.0uNeML_syn22kIjiI71OdpYjF3g');