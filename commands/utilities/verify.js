const Discord = require("discord.js");

module.exports = {
    name: "verify",
    category: "utilites",
    timeout: 10000,
    run: async(client, message, args) => {
        if (message.channel.id !== "793111314296864798") {

            return;
        }
        
        await message.delete();
        await message.member.roles.add("793112898591129621");
        return;
    }
}