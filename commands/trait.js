const traits = [
  "Archaeologist: Must find the bone as a priority. Can't do anything else until it is found",
  'Atmospheric: Can only use the candle for light',
  'Back Pain: Must crouch at all times after the truck door is opened for the first time',
  'Bartender: Must bring all drinks on the map to the ghost room',
  'Bold: Can’t use the crucifix',
  'Chatterbox: Must always talk to the ghost when near it, say its name, ask for signs, etc. including during hunts',
  'Chef: Must bring all plates and cutlery on the map to the ghost room',
  'Chilly: Must keep the breaker on at all times',
  'Clumsy: Drop all items when a hunt begins',
  'Courteous: You must close every door behind you, including during hunts',
  'Coward: If you experience a ghost event, you must leave instantly and guess based on the current evidence and ghost behaviour.',
  'Deafened: No sound when playing this character',
  'Disorientated: Headphones are reversed when playing this character',
  'Forgetful: Two random unlocked items have been forgotten, and are banned this mission. Spin the wheel to decide which items',
  'Germophobe: Must wash your hands every time you directly pass a sink, or a room with a sink',
  "Impulsive: If there is a ghost event, the character must drop whatever item is in their hand out of fear. This item is now broken and can't be used again this mission",
  'Inconsiderate: Every door you pass must be left wide open, including during hunts',
  'Inquisitive: If the Ouija board is found, you immediately have to use it until you get a successful answer',
  'Insane: Never allowed to check sanity on the truck monitor',
  'Limp: Can’t sprint during hunts',
  'Nycotophobic: Building Lights have to stay on in the current room you are in at all times. If the breaker goes off, go get it back on ASAP',
  'Oversized: Can’t hide in lockers or closets',
  'Paranoid: Can’t hide in the same place more than once per mission (includes furniture, lockers and closets)',
  'Perceptive: Must use eyes and ears only to find and confirm the ghost room',
  'Pharmacophobic: Can’t take sanity pills',
  'Photophobic: No building lights are allowed',
  'Raver: Can only use glowsticks for light',
  'Reckless: Can’t use smudge sticks',
  'Rushed: Not allowed to check the breaker location on the truck monitor',
  'Shy: Not allowed to talk to the ghost (this includes the Spirit Box and Ouija Board)',
  'Small pockets: Can only carry 2 items',
  'Thick jumper: Must keep the breaker off at all times',
  'Tidy: Must put every item back where it belongs if the ghost disturbs or throws them',
  'Unprepared: Can’t look at any information on the whiteboard (ghost name & optional objectives)',
  'Useless: Can’t use any evidence gathering equipment',
  'UV expert: Can only use the UV torch for light',
  'Weak bladder: Must use the toilet every time you directly pass a room with a toilet in',
  'Young at heart: Must rescue any stuffed toys and bring them back to the truck'
];

module.exports = {
	name: 'trait',
	description: "Pick a trait from Nuzzgard's PhasmoRPG trait list",
	execute(message, args) {
    message.channel.send(traits[Math.floor(Math.random() * traits.length)]);
	},
  getTrait() {
    return traits[Math.floor(Math.random() * traits.length)];
  },
};