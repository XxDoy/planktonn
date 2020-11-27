const Command = require('../../handler/commands')
const { runInContext } = require('vm');
const ms = require('ms');

module.exports = class extends Command {

    async run(message) {
        message.channel.send(`My Uptime is \`${ms(this.client.uptime, { long: true})}\``);
    }
}