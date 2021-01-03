exports.run = async (client, oldMember, newMember) => {
    // boost
    if (!oldMember.premiumSince && newMember.premiumSince) {
        return client.channel.cache.get("749869788985294858").send(`Yoo!**${newMember.user.tag}** Udah Boost Server Ini, Thank You`)
    }
}