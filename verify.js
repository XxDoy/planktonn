const Discord = require("discord.js");

module.exports = {
    name: "verify",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
        if (message.channel.id !== "753168518979256342") {

            return;
        }
        
        await message.delete();
        await message.member.roles.add("668491452233547816");
        return;
    }
}