const { MessageEmbed } = require('discord.js')
const kisses = [
    'https://media.giphy.com/media/gTLfgIRwAiWOc/giphy.gif',
    'https://media.giphy.com/media/l3NSaLw58Bx16/giphy.gif',
    'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
    'https://media.giphy.com/media/JFmIDQodMScJW/giphy.gif',
    'https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
    'https://media.giphy.com/media/wOtkVwroA6yzK/giphy.gif',
    'https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
    'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
    'https://media.giphy.com/media/AZSjToDmW19WU/giphy.gif',
    'https://media.giphy.com/media/QGc8RgRvMonFm/giphy.gif',
    'https://media.giphy.com/media/NhuUvzNdoHA0o6F5fP/giphy.gif',
    'https://images-ext-2.discordapp.net/external/fu5fwqE3EBaQYUVI9TE6QRMyATAm_R2CH-nwfyoHcio/https/cdn.weeb.sh/images/HJ5khTOP-.gif',
];
// ini loh dari kemaren koe gapaham harus isi module.exports = {} baru ikutin kek yang sesudahnya. dari kemaren aku udah liatin njer itu, koenya gapeka :v, masa kalo ama hany bisa peka ama coding ga wkwkwkw
module.exports = {
    name: "kiss",
    category: "utilites",
    aliases: ["cium"],
    timeout: 10000,
    run: async(client, message, args) => {
    const user = message.mentions.users.first();
    if (!user) return message.channel.send('hmm... i think you gotta provide a valid user to kiss');

    const kiss = new MessageEmbed()
        .setColor('RANDOM')
        .setImage(kisses[Math.floor(Math.random() * kisses.length)])
        .setDescription(`${message.author.username} ***kissed*** ${user.username}!`)
    return message.channel.send(kiss)

}
}