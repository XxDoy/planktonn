const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "verifyembed",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
    
    const kiss = new MessageEmbed()
        .setColor('Black')
        .setTitle('How To Verify?')
        .setDescription('Type : b?verify to access all channell')
    return message.channel.send(kiss)

}
}