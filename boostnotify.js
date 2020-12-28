module.exports = async (client, oldMember, newMember) => {
    // boost
    if (!oldMember.premiumSince && newMember.premiumSince) {
        return client.channel.cache.get("724262137358188566").send(`Yoo!**${newMember.user.tag}** Udah Boost Server Ini, Thank You`)
    }
}