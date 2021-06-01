ENGLISH
const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => { 
    if (message.author.id !== message.guild.owner.id) return message.channel.send(`:x: This command can only be used by the guild owner.`);
    let kontrol = await db.fetch(`denetimkaydi_${message.guild.id}`)
    if(!kontrol) return message.reply('System is already disabled. enable-audit can be used to open it.')
    message.reply('Its being disabled...').then(theartistt => {
        theartistt.edit("System disabled!")
  
  db.delete(`denetimkaydi_${message.guild.id}`)
    }, 5000)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};
 
exports.help = {
  name: 'disable-audit',
  description: 'audit log system the artist', 
  usage: 'disable-audit'
};

TÜRKÇE
const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => { 
    if (message.author.id !== message.guild.owner.id) return message.channel.send(`:x: Bu komutu sadece sunucu sahibi kullanabilir.`);
    let kontrol = await db.fetch(`denetimkaydi_${message.guild.id}`)
    if(!kontrol) return message.reply('Sistem zaten deaktif. denetim-aç komutuyla açabilirsin.')
    message.reply('Denetim kaydı sistemi deaktifleştiriyor.').then(theartistt => {
        theartistt.edit("Sistem deaktif!")
  
  db.delete(`denetimkaydi_${message.guild.id}`)
    }, 5000)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};
 
exports.help = {
  name: 'denetim-kapat',
  description: 'denetim kaydı sistemi the artist', 
  usage: 'denetim-kapat'
};
