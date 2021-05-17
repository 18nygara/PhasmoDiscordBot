const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const { init_maps } = require('./commands/lockout');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const startup = require("./commands/lockout")

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	client.commands.get('lockout').init_maps(); // explicitly initialize the maps for the lockout challenge
	console.log('Starting Bot...');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		// silently continue
	}
});

client.login(token);