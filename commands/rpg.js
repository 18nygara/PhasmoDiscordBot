const traits = require("./trait.js");
const maps = require('./map.js');

module.exports = {
	name: 'rpg',
	description: 'Create a new character with n number of traits from the PhasmoPRG list.',
	execute(message, args) {
    if (!args.length) {
      message.channel.send("Specify the number of traits you want - !rpg <num>");
      return;
    }    
    let curr_traits = new Array(parseInt(args[0], 10));
    if (curr_traits.length <= 0 || curr_traits.length > 20) {
      message.channel.send("Between 1 and 20 bruh.");
      return;
    }
    for (let i = 0; i < parseInt(args[0], 10); i++) {
      let temp = traits.getTrait();
      while (curr_traits.includes(temp)) {
        temp = traits.getTrait();
      }
      curr_traits[i] = temp;
    }
    let msg = "PhasmoRPG!\n" + message.author.username + ", your character has:\n";
    for (let i = 0; i < curr_traits.length; i++) {
      msg += curr_traits[i] + "\n";
    }
    message.channel.send(msg);

    if (args.includes('-map')) {
      message.channel.send("\nMap: " + maps.map_options[Math.floor(Math.random()*maps.map_options.length)]);
    }
  },
};