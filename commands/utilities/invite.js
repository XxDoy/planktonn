const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "invite",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
    
    const kiss = new MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/771446281322889237/793661827858694184/giphy_2.gif')
        .setDescription(`Want to add ${client.user.username} to your Server?`)
        .setDescription(`[Klick here](https://animesoul.com/)`)
    return message.channel.send(kiss)

}
}