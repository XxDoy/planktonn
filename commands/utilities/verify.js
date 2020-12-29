const Discord = require("discord.js");

module.exports = {
    name: "verify",
    category: "utilites",
    cooldown: 20,
    run: async(client, message, args) => {
        if (message.channel.id !== "") {
            return;
        }

    await message.delete();
    await message.member.roles.add("");
    return;
    }
}