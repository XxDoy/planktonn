const { MessageEmbed } = require('discord.js')
const kisses = [
    'https://images-ext-2.discordapp.net/external/_VFDyATLhCcyu2AW6XSPjKy2qQ_RXytUrNhQmLXLSmM/https/cdn.nekos.life/baka/baka_022.gif',
    'https://cdn.nekos.life/baka/baka_009.gif',
    'https://images-ext-1.discordapp.net/external/2ystV3fEcHpqQHUKfVGX4Tm1T_JKsJQIOUStjefSJlo/https/cdn.nekos.life/baka/baka_011.gif',
]

let member = message.mentions.members.first() | message.guild.members.cache.get(userArgs[0]) | message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") | x.user.username === userArgs[0]) | message.member;

module.exports = {
    name: "baka",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {

    const kiss = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${member.username} **BAKA!!!**`)
        .setImage(kisses[Math.floor(Math.random() * kisses.length)])
    return message.channel.send(kiss)

}
}