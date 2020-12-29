module.exports = async (client, oldMember, newMember) => {
    // boost
    if (!oldMember.premiumSince && newMember.premiumSince) {
        return client.channel.cache.get("724262137358188566").send.message.channel.id !== ("793111314296864798") (`Yoo!**${newMember.user.tag}** Udah Boost Server Ini, Thank You`)
    }
}