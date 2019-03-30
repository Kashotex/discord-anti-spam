const Discord = require("discord.js");
const client = new Discord.Client();
const antispam = require('discord-anti-spam')

const config = require("./config.json");
client.config = config;

client.on('ready', () => {
  console.log(times+`\x1b[33m%s\x1b[0m`,'[WARN]','\x1b[0m','Connexion en cours...');
  console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m', 'Connexion à l\'API Discord.js effectuée');
  console.log(times+`\x1b[36m%s\x1b[0m`,'[INFO]', '\x1b[0m','Connecté sur ' + client.user.username + '#' + client.user.discriminator);
  console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Chargement terminé');
  console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Prêt et connecté - Développé par Emmanuel.');

  antispam(client, {
    warnBuffer: 3,
    maxBuffer: 5,
    interval: 2000,
    warningMessage: "le spam n'est pas autorisé. Si vous persistez, vous serais banni !",
    banMessage: "a été banni pour spam.",
    maxDuplicatesWarning: 7,
    maxDuplicatesBan: 10,
    deleteMessagesAfterBanForPastDays: 7,
    exemptUsers: ["Blizzard#4453", "Emmanuel#1411"]
  });
  
client.login(config.token);
