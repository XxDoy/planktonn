const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "pic",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("PIC LIST")
    .setDescription("***Use a? (command)***")
    .addField({
        name: "Animal",
        value: '➤`| cat`\n➤`| dog`\n➤`| panda`\n➤`| fox`\n➤`| koala`',
        inline: true
    }, {
        name: "Anime",
        value: '➤`| neko`\n➤`| waifu`',
        inline: true
    })

    .setFooter(`Requested by ${message.author.username}`);
    
    await message.channel.send(embed)       

    }
}