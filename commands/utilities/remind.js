const Discord = require("discord.js")
const ms = require("ms")
const db = require("quick.db")

let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

module.exports = {
    name: "remind",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
    let timeuser = args[0]
    let reason = args.slice(1).join("")

    if(!timeuser) return message.reply(":x: You Should Enter Time | second(s) minute(m) hours(h) ")
    if(!reason) return message.reply(":x: You Should Enter Reason")

    db.set(`remind.${message.author.id}`,Date.now() + ms(timeuser))
    message.channel.send(`I will Remind You, <@${user.user.id}>`)
    const interval = setInterval(function() {


        if(Date.now() > db.fetch(`remind.${message.author.id}`)){
            db.delete(`remind.${message.author.id}`)
            message.author.send(`**Remind: **${reason}`)
            .catch(e => console.log(e))
            clearInterval(interval)
        }
    },1000)
}
}