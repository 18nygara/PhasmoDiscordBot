const maps = ["Bleasdale Farmhouse", "Edgefield Street House", "Grafton Farmhouse", "Ridgeview Road House", "Tanglewood Street House", "Willow Street House", "Brownstone High School", "Prison", "Maple Lodge Campsite", "Asylum"];

module.exports = {
  name: 'map',
  description: 'Pick a random map.',
  execute(message, args) {
    message.channel.send("\nMap: " + maps[Math.floor(Math.random()*maps.length)]);
    return;
  },
  map_options: maps
};