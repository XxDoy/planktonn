const Discord = require("discord.js");

module.exports = {
    name: "verify",
    category: "utilites",
    cooldown: 20,
    run: async(client, message, args) => {
        if (message.channel.id !== "793111314296864798") {
            return;
        }

    await message.delete();
    await message.member.roles.add("793111000173248533");
    return;
    }
}