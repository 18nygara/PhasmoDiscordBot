const maps = ["Left Map", "Right Map", "Top Map", "Bottom Map", "Middle Map",
  "Your Choice", "Biggest Map", "Smallest Map"];

module.exports = {
  name: 'map',
  description: 'Pick a random map.',
  execute(message, args) {
    message.channel.send("\nMap: " + maps[Math.floor(Math.random()*maps.length)]);
    return;
  },
  map_options: maps
};