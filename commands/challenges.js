module.exports = {
	name: 'challenges',
	description: 'List of all challenges currently implemented',
	execute(message, args) {
    message.channel.send("-- List of Custom Challenges --\n\nItem Lockout - !lockout\
		\nPhasmoRPG - !rpg <num>\nRandom Challenge - !random\n\n-- List of active commands --\
		\n\nGet a random map - !map\nGet a random item - !item\nGet a random trait (PhasmoRPG)- !trait");
	},
};