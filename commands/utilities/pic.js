const { MessageEmbed } = require('discord.js');

const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });

module.exports = {
    name: "pic",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${message.guild.name}`, avatar)
    .setTitle("PIC LIST")
    .setDescription("***Use a? (command)***")
    .addField("➤` neko`\n➤` waifu`\n`➤ cat`\n➤` dog`\n➤` panda`\n➤` fox`\n➤` koala`")
    .setFooter(`Requested by ${message.author.username}`)
    await message.channel.send(embed)       

    }
}