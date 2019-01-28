const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'bvn') {
    msg.reply('bienvenue a toi lis le reglement dans #:orange_book:reglement:orange_book: et si tu veux faire partis du staff fais ta candidature dans #:scroll:condidature-on:scroll:');
  }
});

/"A rejoint "/
client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes desormais ' + member.guild.memberCount)
    member.guild.channels.get('515590821563596811').send(embed)
    member.addRole('515589041383669766')

});  
/"A quitté "/
client.on('guildMemberRemove', member =>{
  let embed = new Discord.RichEmbed()
      .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
      .setFooter('Nous sommes desormais ' + member.guild.memberCount)
  member.guild.channels.get('515590821563596811').send(embed)

}); 

/"kick"/
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + 'kick')
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utliser cette command")
       let member = message.mentions.members.first()
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable)return message.channel.send ("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.channel.send(member.user.username + 'a été exclu :white_check_mark:')
});

/"Ban"/
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + 'ban')
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utliser cette command")
       let member = message.mentions.members.first()
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.bannable)return message.channel.send ("Je ne peux pas bannir cet utilisateur :sunglass:")
       member.guild.ban(member, {days: 7})
       message.channel.send(member.user.username + 'a été ban :white_check_mark:')
});

client.login('NTE1NjQ3MzQwODY3MjIzNTYz.Dy8Y4A.jTmmSJhoiysa86Tm8bQDUa745S4');
