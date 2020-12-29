const Discord = require('discord.js');
const db = require("quick.db")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "afk",
    run: async (client, message, args) => {
        let msg = message.content.tolowerCase();
        let cmd = args.shift().tolowerCase();

        message.flags = [];
        while (args[0] && args[0][0] === "--") {
            message.flags.push(args.shift().slice(1));
        }

        const status = new db.table("AFKs");
        let afk = await status.fetch(message.author.id);
        const Embed = new Discord.MessageEmbed().setColor(0xffffff)

        if (!afk) {
            embed.setDescription(`**${message.author.tag}** Is Now Afk.`)
            embed.setFooter(`Reason: ${args.join(" ") ? args.join(" ") : "AFK"}`)
            status.set(message.author.id, args.join(" ") || `AFK`);
        } else {
            embed.setDescription(`Welcome back @${message,author.tag} i will remove Your Afk.`);
            status.delete(message.author.id);
        }

        message.channel.send(embed)
    }
}

let afk = new db.table("AFKs")
    authorStatus = await afk.fetch(message.author.id),
    mentioned = message.mentions.members.first();

if (mentioned) {
    let status = await afk.fetch(mentioned.id);

    if (status) {
        const embed = new Discord.MessageEmbed()
        .setColor(0xffffff)
        .setDescription(`This user (${mentioned.user.tag}) is AFK: **${status}**`)
        message.channel.send(embed).then(i => i.delete({timeout: 5000}));
        afk.delete(message.author.id)
    }
}