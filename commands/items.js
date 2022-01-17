const item_list = ['Spirit Box',
  'Ghost Writing Book',
  'Photo Camera',
  'EMF Reader',
  'Video Camera',
  'UV Flashlight',
  'Flashlight',
  'Candle',
  'Crucifix',
  'Glow Stick',
  'Head Mounted Camera',
  'D.O.T.S. Projector',
  'Motion Sensor',
  'Parabolic Microphone',
  'Salt Shaker',
  'Sanity Pills',
  'Smudge Sticks',
  'Sound Sensor',
  'Strong Flashlight',
  'Thermometer',
  'Tripod'];

module.exports = {
    name: 'item',
    description: 'Randomize an item from the available pool',
    execute(message, args) {
      message.channel.send(item_list[Math.floor(Math.random()*item_list.length)]);
    },
  };