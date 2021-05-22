const lockout = require("./lockout");
const rpg = require("./rpg");
const maps = require('./map.js');

const rand_challenges = ["No Evidence", "Lockout", "Deaf Leading the Blind", "Lockdown",
  "Must Talk During Hunts", "Photo Randomizer", "Speedrun", "No Audio", "rpg"];

module.exports = {
  name: 'random',
  description: 'Randomize a challenge for the user to pick',
  execute(message, args) {
    let challenge = rand_challenges[Math.floor(Math.random()*rand_challenges.length)];
    if (challenge === 'Lockout') {
      lockout.execute('lockout', args);
    } else if (challenge === 'rpg') {
      lockout.execute('rpg', Math.floor(Math.random() * 5));
    } else {
      message.channel.send(challenge);
      if (args.length && args[0] === '-map') {
        message.channel.send("\nMap: " + maps.map_options[Math.floor(Math.random()*maps.map_options.length)]);
      }
    }
  },
};