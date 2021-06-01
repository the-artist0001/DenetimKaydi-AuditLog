ENGLISH
const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => { 
    if (message.author.id !== message.guild.owner.id) return message.channel.send(`:x: This command can only be used by the guild owner.`);
  
    let kontrol = await db.fetch(`denetimkaydi_${message.guild.id}`)
    if(kontrol) return message.reply('System is already enabled. disable-audit can be used if you wanna close it.')
     
    message.channel.send("System enabled!")
  
  db.set(`denetimkaydi_${message.guild.id}`, 'açık')
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};
 
exports.help = {
  name: 'enabled-audit',
  description: 'audit log system the artist', 
  usage: 'enable-audit'
}; //don't really care about db names that are set, they are Turkish. usage is important, not the names.

TÜRKÇE
const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => { 
    if (message.author.id !== message.guild.owner.id) return message.channel.send(`:x: Bu komutu sadece sunucu sahibi kullanabilir.`);
  
    let kontrol = await db.fetch(`denetimkaydi_${message.guild.id}`)
    if(kontrol) return message.reply('Sistem zaten aktif. denetim-kapat komutuyla kapatabilirsin.')
     
    message.channel.send("Sistem aktif!")
  
  db.set(`denetimkaydi_${message.guild.id}`, 'açık')
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};
 
exports.help = {
  name: 'denetim-aç',
  description: 'denetim kaydı sistemi the artist', 
  usage: 'denetim-aç'
};
