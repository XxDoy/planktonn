const canva = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "trigger",
    category: "fun",
    timeout: 10000,
}
    run: async(client, message, args) => {

    let avatar = message.author.displayAvatarURL({ dynamic: false, format: "png" });

    let image = await canva.Canvas.trigger(avatar);

    let triggered = new Discord.MessageAttachment(image, "triggered.gif")

    message.channel.send(triggered);
}
exports.help = {
    name: "trigger",
    description: "trigger you avatar ?",
    usage: "<prefix>trigger | <prefix>trigger <member> ",
    example: "h!trigger | h!trigger @thebluerose#9697"
}