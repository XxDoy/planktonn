const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "verifyembed",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
    
    const botIcon = new bot.user.displayAvatarURL();
    const kiss = new MessageEmbed()
        .setColor('Black')
        .setTitle('How To Access All Channel?')
        .setDescription('***Type : b?verify***')
        .setFooter(`${botIcon} | ${client.user.username}`)
    return message.channel.send(kiss)

}
}