const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "pic",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("PIC LIST")
    .setDescription("Use a? (command)")
    .addField("`neko` | `waifu` | `cat` | `dog` | `panda` | `fox` | `koala`")
    .setFooter("`Requested by ${message.author.username}`")
    await message.channel.send(embed)       

    }
}