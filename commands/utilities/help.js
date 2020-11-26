const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "help",
    cateogry: "utilites",
    run: async(client, message, args) => {
        if (message.deletable) message.delete();
        let help = args.join(" ");

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });


        if (!help) {
            
            let embed = new MessageEmbed()
                .setTitle('Help Menu')
                .setThumbnail('https://images-ext-2.discordapp.net/external/MdiB5w3UZ3BKjkegeVbC4HTwlTManaVM349YloCDvHk/%3Fwidth%3D468%26height%3D468/https/images-ext-1.discordapp.net/external/NyReI_EVus3P2NbhTPjtiPyRwcNrM_vB6iHfkK-OS2M/https/media.giphy.com/media/u11uVavpcwiqc56zbx/giphy.gif')
                .setAuthor(`${message.guild.name}`, avatar)
                .addFields({
                    name: "Administrator ",
                    value: '`ban` `kick` `warn` `mute` `warnings` `unban` `deletewarns` `unmute` `clear` ',
                    inline: true
                }, {
                    name: "Utilities ",
                    value: '`avatar` `banner` `say` `user` `calculate` `weather` `pic` `anime`',
                    inline: false
                }, {
                    name: "Fun ",
                    value: '`hug` `kiss` `slap` `punch` `cry` `happy` `angry` `pat` `pikachu` `meme`',
                    inline: false
                }, {
                    name: "Economy ",
                    value: 'Soon!',
                    inline: false
                }, {    
                    name: "Note ",
                    value: '\_\_\*\*\*- This Bot Now Support Online 24 Hours \*\*\*\_\_\_',
                    inline: false
                })
                .setFooter(`Requested by ${message.author.username}`, avatar)
                .setColor('RANDOM')
                .setImage("https://images-ext-2.discordapp.net/external/COl0mZHjPwdVXFoxenrUPy1jbX8atqOai7dIO42wMns/https/media.discordapp.net/attachments/709369821439197237/709374347340677231/lineee.gif")
                .setTimestamp()
            return message.channel.send(embed)
            msg.delete()
        }
    }
}


