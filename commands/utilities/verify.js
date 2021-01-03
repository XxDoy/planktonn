const Discord = require("discord.js");

module.exports = {
    name: "verify",
    category: "utilites",
    cooldown: 20,
    run: async(client, message, args) => {
        if (message.channel.id !== "794142711094837300") {
            return;
        }

    await message.delete();
    await message.send("Wait A second");
    await message.member.roles.add("668491452233547816");
    await message.delete();
    return;
    }
}