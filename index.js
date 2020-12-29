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
        `b?help | ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Members Blank`
    ];

    setInterval(function() {

        let status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setPresence({ activity: { name: status }, status: 'dnd', type: 'WATCHING' });
    }, 1000);

    client.on("message", message => {
        let wordArray = message.content.split(" ");
        console.log(wordArray)

        let filterWords = [
        ];
        for (var i = 0; i < filterWords.length; i++) {
            if (wordArray.includes(filterWords[i])) {
                message.delete();
                message.reply(
                    'Aduh Kasar Bet Kamu Teh :('
                );
                break;
            }
        }
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

    client.on('guildMemberAdd', (member) => {
        let channelID = '775184245370912769';
        if(member.guild.id != '774092854686777414') return
        let embed = new Discord.MessageEmbed()
        .setTitle(`Member Joined!!`)
        .setDescription(`${member.user.tag} has joined this server!`)
        .setColor("BLACK")
        .setTimestamp()
        client.channels.cache.get(channelID).send(embed)
    })
    
    client.on('guildMemberRemove', (member) => {
        let channelID = '775184245370912769';
        if(member.guild.id != '774092854686777414') return;
        let embed = new Discord.MessageEmbed()
        .setTitle(`Member Left!!`)
        .setDescription(`\`${member.user.tag}\` has left this server`)
        .setTimestamp()
        client.channels.cache.get(channelID).send(embed)
    })

client.login(process.env.TOKEN);