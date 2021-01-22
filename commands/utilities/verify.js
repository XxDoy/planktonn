const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
    name: "verify",
    category: "utilites",
    cooldown: 20,
    run: async(client, message, args) => {

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });

        if (message.channel.id !== "794142711094837300") {
            return;
        }

    await message.member.roles.add("668491452233547816");

    let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.username}`)
            .setDescription('<a:BLANK_verified:755234123974574120>  ||  **Successfully Verified!!**\n\n```EXAMPLE : b?verify```')
            .setTimestamp()
            .setFooter(`${message.author.username}`, avatar)
        await message.channel.send(embed)
        message.delete()
    return;
    
    }
}