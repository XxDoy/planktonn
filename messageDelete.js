const { MessageEmbed, Guild, Message } = require("discord.js");
const db = require("quick.db");

exports.run = async(client, message, args) => {

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    if (message.partial) await message.fetch();

    let modlog = db.get(`moderation.${message.guild.id}.modlog`)
    if (!modlog) return;

    if (message.channel.id === modlog.channel) return;

    let toggle = modlog.toggle;
    if (!toggle || toggle == null || toggle == false) return;

    const embed = new MessageEmbed()
    .setTitle("Message Deleted")
    .setDescription(`Message deleted in <#${message.channel.id}> by <@${user.user.id}> \n ${message.content}`)
    .setTimestamp()
    .setColor("RANDOM")

    return message.guild.channels.cache.get(modlog.channel).send(embed);

    }