const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "verifyembed",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
    
    const kiss = new MessageEmbed()
        .setColor('Black')
        .setTitle('Type : b?verify to access all channel')
    return message.channel.send(kiss)

}
}