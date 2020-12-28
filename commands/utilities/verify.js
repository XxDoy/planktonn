const Discord = require("discord.js");
const guildMember = message.member;

module.exports = {
    name: "verify",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
        const role = message.guild.roles.cache.get('793111000173248533');
        if (!role) return message.channel.send('Verify role to obtain does not exist');
        try {
            await message.member.guildMember.addRole(role.id);
            try {
                await message.member.send(`You Have Verifiedin ${message.guild.name}`);
        } catch (err) {
            console.log(err);
            message.channel.send(`I wasn't able to message ${message.author.tag}`)
        } 
    } catch (err) {
        message.channel.send(`There was an issue gving <@${message.author.id}> the verify on command.`);
        console.log(err);
    }
}
}
