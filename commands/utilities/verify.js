const Discord = require("discord.js");

module.exports = {
    name: "verify",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
        
        message.member.addRole("793111000173248533").then(
            message.react('✔️')
        ).catch(err => console.log(err))
    }
}