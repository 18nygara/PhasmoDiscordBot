const lockout = require("./lockout")
const maps = require('./map.js');

const rand_challenges = ["No Evidence", "Lockout", "Deaf Leading the Blind", "Lockdown",
  "Must Talk During Hunts", "Photo Randomizer", "Speedrun"];

module.exports = {
    name: 'random',
    description: 'Randomize a challenge for the user to pick',
    execute(message, args) {
      let challenge = rand_challenges[Math.floor(Math.random()*rand_challenges.length)];
      if (challenge === 'Lockout') {
        lockout.execute('lockout', args);
      } else {
        message.channel.send(challenge);
        if (args.length && args[0] === '-map') {
          message.channel.send("\nMap: " + maps.map_options[Math.floor(Math.random()*maps.map_options.length)]);
        }
      }
    },
  };