const Discord = require("discord.js")
const ms = require("ms")

module.exports = {
    name: "remind",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
    let time = args[0]

    if (!time) {
     return message.channel.send(':x: You Should Enter Time | second(s) minute(m) hours(h) ')
    }
    
    const reminder = args.join(" ").slice(args[0].lenght);

    if (reminder) {
        if (!args[1]) {
            return message.channel.send('You need to spesify a reminder')
        }

        message.channel.send(`You have set a reminder, i wil remind you ${time}`)
            
        setTimeout(function () {
                message.member.send(`${reminder}`)
            }, ms(time));
        }
    }
}