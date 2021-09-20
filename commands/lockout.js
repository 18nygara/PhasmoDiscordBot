const high_priority = new Map();
const mid_priority = new Map();
const helpful_priority = new Map();

const maps = require('./map.js');

module.exports = {
  name: 'lockout',
  description: 'Complete objectives, discover evidence, and find key items to unlock equipment.',
  execute(message, args) {
    message.channel.send(item_lockout());
    if (args.length && args[0] === '-map') {
      message.channel.send("\nMap: " + maps.map_options[Math.floor(Math.random()*maps.map_options.length)]);
    }
  },
  init_maps() {
    high_priority.set("EMF Sensor", 0);
    high_priority.set("Spirit Box", 0);
    high_priority.set("Ghost Writing Book", 0);
    high_priority.set("Video Camera", 0);
    high_priority.set("Photo Camera", 0);
    high_priority.set("Strong Flashlight", 0);
    high_priority.set("D.O.T.S. Sensor", 0);
    mid_priority.set("Lighter", 0);
    mid_priority.set("Head Mounted Camera", 0);
    mid_priority.set("Crucifix", 0);
    mid_priority.set("UV Flashlight", 0);
    mid_priority.set("Motion Sensor", 0);
    mid_priority.set("Smudge Sticks", 0);
    mid_priority.set("Salt", 0);
    helpful_priority.set("Tripod", 0);
    helpful_priority.set("Building Power", 0);
    helpful_priority.set("Sanity Pills", 0);
  }
}

function getItem(list) {
	var added = 1;
	while (added == 1) {
			var keys = Array.from(list.keys());
			var rnd = Math.floor(Math.random()*keys.length);
			var chosen = keys[rnd];
			added = list[chosen];
	}
	list[chosen] = 1;
	return chosen;
}

function clear_items() {
	for (let [key, value] of high_priority) {
			high_priority[key] = 0;
	}
	for (let [key, value] of mid_priority) {
			mid_priority[key] = 0;
	}
	for (let [key, value] of helpful_priority) {
			helpful_priority[key] = 0;
	}
}

function item_lockout() {
  clear_items();

	let message = "";
	message += "Bone Found: " + getItem(high_priority) + "\n";
	message += "Ouija Found: " + getItem(helpful_priority) + "\n\n";
	message += "1st Evidence Found: " + getItem(high_priority) + "\n";
	message += "2nd Evidence Found: " + getItem(high_priority) + "\n";
	message += "3rd Evidence Found: " + getItem(helpful_priority) + "\n\n";

	// randomize high or mid priority items for objectives -- perhaps make something nicer in the future
	if (Math.floor(Math.random() * 2 == 0)) {
		message += "2nd Objective Found: " + getItem(high_priority) + "\n";
	} else {
		message += "2nd Objective Found: " + getItem(mid_priority) + "\n";
	}
	if (Math.floor(Math.random() * 2 == 0)) {
		message += "3rd Objective Found: " + getItem(high_priority) + "\n";
	} else {
		message += "3rd Objective Found: " + getItem(mid_priority) + "\n";
	}
	if (Math.floor(Math.random() * 2 == 0)) {
		message += "4th Objective Found: " + getItem(high_priority) + "\n\n";
	} else {
		message += "4th Objective Found: " + getItem(mid_priority) + "\n\n";
	}

	let free_list = [];
	let maps = [high_priority, mid_priority, helpful_priority];
	for (let map of maps) {
		for (let [key, value] of map) {
			if (map[key] == 0) {
				free_list.push(key, ", ");
			}
		}
	}

	message += "Free Items: " + free_list.join("");
	return message.substr(0,message.length - 2);
}