const { Client, MessageEmbed, Collection } = require('discord.js');
const discord = require('discord.js');
const { config } = require('dotenv');
const { resolve, join } = require('path')
const { get } = require('snekfetch')
const fs = require('fs')
const superagent = require('superagent')
const prefix = "b?";
const usersMap = new Map();
const LIMIT = 5;
const TIME = 7000;
const DIFF = 3000;

const client = new Client({
    disableEveryone: true
})

client.commands = new Collection();
client.aliases = new Collection();
client.config1 = config;

config({
    path: __dirname + "/.env"
});

["commands.js"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Bot Ready Up \n1 \n2 \n3 \nReady To Duty ${client.user.username} !`);

    let statuses = [
        `b?help | ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Blank Members`
    ];

    setInterval(function() {

        let status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setPresence({ activity: { name: status }, status: 'dnd', type: 'WATCHING' });
    }, 1000);

    client.on("message", message => {
        let wordArray = message.content.split(" ");
        console.log(wordArray)
        
    })
    client.on('message', message => {
        if (message.author.bot) return;
        if (usersMap.has(message.author.id)) {
            const userData = usersMap.get(message.author.id);
            const { lastMessage, timer } = userData;
            const difference = message.createdTimestamp - lastMessage.createdTimestamp;
            let msgCount = userData.msgCount;
            console.log(difference);
            if (difference > DIFF) {
                clearTimeout(timer);
                console.log('Cleared timeout');
                userData.msgCount = 1;
                userData.lastMessage = message;
                userData.timer = setTimeout(() => {
                    usersMap.delete(message.author.id);
                    console.log('Removed from RESET.');
                }, TIME);
                usersMap.set(message.author.id, userData);
            } else {
                ++msgCount;
                if (parseInt(msgCount) === LIMIT) {
                    const role = message.guild.roles.cache.get('752350200550522883');
                    message.member.roles.add(role);
                    message.reply('kamu Telah Dibunuh.');
                    setTimeout(() => {
                        message.member.roles.remove(role);
                        message.reply('Kamu Telah Dibangkitkan.');
                    }, TIME);
                } else {
                    userData.msgCount = msgCount;
                    usersMap.set(message.author.id, userData);
                }
            }
        } else {
            let fn = setTimeout(() => {
                usersMap.delete(message.author.id);
                console.log('Removed from map.');
            }, TIME);
            usersMap.set(message.author.id, {
                msgCount: 1,
                lastMessage: message,
                timer: fn
            });
        }
    });

   client.on('guildMemberAdd', async(member) => {

        const Channel = member.guild.channels.cache.get('759945256413429851')
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Welcome **${member.displayName}** To Server **${member.guild.name}**\n\n<a:verified:755234123974574120> Jangan Lupa Untuk Terlebih Dahulu Membaca <#723202845989535877> Dan <#668495345235525653>\n\n <a:verified:755234123974574120> Take Role Di <#703552850281758740> dan <#724269570780561520>\n\n <a:verified:755234123974574120> Biar Kenal Intro Donk Di <#705323788732203069> \n\n Semoga Betah Di Server ${member.guild.name}`)
            .setImage('https://media.discordapp.net/attachments/753168518979256342/795916542633574400/ezgif.com-add-text.gif')
            .setFooter(`Kamu Member Ke ${member.guild.memberCount}`)
        Channel.send(embed)
    })
// jangan pernah naruh command atau apapun dibawah ini karena script ini menentukan antar file jadi wajib diatas biar berfungsi

    client.on("message", async message => {
        if (message.author.bot) return;
        if (!message.guild) return;
        if (!message.content.startsWith(prefix)) return;
        if (!message.member) message.member = await message.guild.fetchMember(message);

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();

        if (cmd.length === 0) return;

        let command = client.commands.get(cmd);
        if (!command) command = client.commands.get(client.aliases.get(cmd));

        if (command)
            command.run(client, message, args);

        client.afk = new Map();
        client.on("message", async message => {
            if (message.author.bot) return;
            if (message.channel.type === "dm") return;

            let prefix = config.prefix;
            let messageArray = message.content.split(" ");
            let command = messageArray[0].toLowerCase();
            let args = messageArray.slice(1);

            // return message.channel.send(`**${user_tag}** is currently afk. Reason: ${key.reason}`);
            // return message.reply(`you have been removed from the afk list!`).then(msg => msg.delete(5000));

            if (message.content.includes(message.mentions.members.first())) {
                let mentioned = client.afk.get(message.mentions.users.first().id);
                if (mentioned) message.channel.send(`**${mentioned.usertag}** is currently afk. Reason: ${mentioned.reason}`);
            }
            let afkcheck = client.afk.get(message.author.id);
            if (afkcheck) return [client.afk.delete(message.author.id), message.reply(`you have been removed from the afk list!`).then(msg => msg.delete(5000))];

            if (!command.startsWith(prefix)) return;

            let cmd = bot.commands.get(command.slice(prefix.length));
            if (cmd) cmd.run(bot, message, args);
   
                    client.on("message", async message => {
                        if (message.content === `${prefix}join`) {
                            client.emit("guildMemberAdd", message.member);
                            message.delete()
                        }
                    });
         })
    });
})




client.login(process.env.TOKEN);