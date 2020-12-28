const Discord = require("discord.js");

module.exports = {
    name: "verify",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I require \`MANAGE_ROLES\` permission.");

        const role = message.guild.roles.cache.get('793111000173248533');

        await message.member.roles.add(roles.id).catch(err => console.log(err));
    }
}