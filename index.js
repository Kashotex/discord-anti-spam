const Discord = require("discord.js");
const client = new Discord.Client();
const antispam = require('discord-anti-spam')

const config = require("./config.json");
client.config = config;

client.on('ready', () => {
  console.log(times+`\x1b[33m%s\x1b[0m`,'[WARN]','\x1b[0m','Currently Connecting. . .');
  console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m', 'Connected to the Discord.js API successfully');
  console.log(times+`\x1b[36m%s\x1b[0m`,'[INFO]', '\x1b[0m','Connected to ' + client.user.username + '#' + client.user.discriminator);
  console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Loading complete');
  console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Ready and connected - Developed by Emmanuel');

  antispam(client, {
    warnBuffer: 3,
    maxBuffer: 5,
    interval: 2000,
    warningMessage: "Spam is not allowed. If you persist, you will be banned!",
    banMessage: "has been banned for spamming.",
    maxDuplicatesWarning: 5,
    maxDuplicatesBan: 10,
    deleteMessagesAfterBanForPastDays: 7,
    exemptUsers: ["Kashotex#1634"]
  });
  
client.login(config.token);
