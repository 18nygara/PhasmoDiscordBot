const maps = ["Left Map", "Right Map", "Top Map", "Bottom Map", "Middle Map",
  "Your Choice", "Biggest Map", "Smallest Map"];

module.exports = {
	map_options: maps
  name: 'map',
  description: 'Pick a random map.',
  execute(message, args) {
    if (!args.length) {
      message.channel.send("\nMap: " + maps.map_options[Math.floor(Math.random()*maps.map_options.length)]);
      return;
    }
  }
};