const { MessageEmbed } = require('discord.js')
const kisses = [
   'https://images-ext-2.discordapp.net/external/uNYfalfBvWe_sFijNdzA6X3jDXdqXXRflpBdUvdRbwU/https/cdn.nekos.life/baka/baka_008.gif',
   'https://images-ext-2.discordapp.net/external/QIkXiPMSW5j5ooS1yQwiWzHjE21oFCckhR3yAOVZOIA/https/cdn.nekos.life/baka/baka_016.gif',
   'https://images-ext-1.discordapp.net/external/M-AapVSelUmIlbGEUdtl2aUVZaeEa7-dr9hdUnkyzKw/https/cdn.nekos.life/baka/baka_009.gif?width=1204&height=677',
   'https://cdn.nekos.life/baka/baka_009.gif',
];

module.exports = {
    name: "baka",
    category: "fun",
    timeout: 10000,
    run: async(client, message, args) => {
        const user = message.mentions.users.first();
        if (!user) return message.channel.send('You Must Mention Someone To Use This Command');

    const kiss = new MessageEmbed()
        .setColor('RANDOM')
        .setImage(kisses[Math.floor(Math.random() * kisses.length)])
        .setDescription(`${user.username} **BAKA!!!**`)
    return message.channel.send(kiss)

}
}