module.exports = async (client, oldMember, newMember) => {
    // boost
    if (!oldMember.premiumSince && newMember.premiumSince) {
        return client.channel.cache.get("724262137358188566").send.message.channel.id !== ("749869788985294858") (`Yoo!**${newMember.user.tag}** Udah Boost Server Ini, Thank You`)
    }
}