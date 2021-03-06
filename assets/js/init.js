function createHouse() {
	var roomArray = [{
		'name': "Bedroom",
		'description': "While the house looks abandoned, it's obvious that someone was still using this room right up until the end.  The bed is unmade and there is dirty clothing strung about the room.",
		'items': [{
					'name': 'bed',
					'spawnItemPercentage': 0,
					'spawnItemType': 'null',
					'spawnBodyPercentage': 15
				},{
					'name': 'dresser',
					'spawnItemPercentage': 15,
					'spawnItemType': 'med',
					'spawnBodyPercentage': 0
				},{
					'name': 'nightstand',
					'spawnItemPercentage': 15,
					'spawnItemType': 'sml',
					'spawnBodyPercentage': 0
				},{
					'name': 'mirror',
					'spawnItemPercentage': 0,
					'spawnItemType': 'null',
					'spawnBodyPercentage': 0
				},{
					'name': 'rug',
					'spawnItemPercentage': 0,
					'spawnItemType': 'null',
					'spawnBodyPercentage': 0
				},{
					'name': 'wardrobe',
					'spawnItemPercentage': 20,
					'spawnItemType': 'med',
					'spawnBodyPercentage': 10
				}],
		'hiddenItems': ['dirty clothes', 'pillows', 'blankets'],
		'canBarricade': true,
	}, {
		'name': "Bathroom",
		'description': "The room smells of mold.  You hold your nose and take in your surroundings.  Nothing here looks clean to touch.",
		'items': [{
					'name': 'bathtub',
					'spawnItemPercentage': 0,
					'spawnItemType': 'null',
					'spawnBodyPercentage': 25
				},{
					'name': 'toilet',
					'spawnItemPercentage': 0,
					'spawnItemType': 'null',
					'spawnBodyPercentage': 0
				},{
					'name': 'sink',
					'spawnItemPercentage': 0,
					'spawnItemType': 'null',
					'spawnBodyPercentage': 0
				},{
					'name': 'mirror',
					'spawnItemPercentage': 0,
					'spawnItemType': 'null',
					'spawnBodyPercentage': 0
				},{
					'name': 'shelves',
					'spawnItemPercentage': 25,
					'spawnItemType': 'sml',
					'spawnBodyPercentage': 0
				}],
		'hiddenItems': ['mold', 'curtain'],
		'canBarricade': false,
	}, {
		'name': "Nursery",
		'description': "You are surround by shelves of old dolls and faded, stuffed animals.  It looks as though someone was once very excited to have a child in this house.  You look at the dust, cobwebs, and the pealing wallpaper and can't imagine bringing a child in here now.",
		'items': [{
					'name': 'crib',
					'spawnItemPercentage': 10,
					'spawnItemType': 'sml',
					'spawnBodyPercentage': 0
				},{
					'name': 'dresser',
					'spawnItemPercentage': 20,
					'spawnItemType': 'med',
					'spawnBodyPercentage': 0
				},{
					'name': 'toys',
					'spawnItemPercentage': 0,
					'spawnItemType': 'null',
					'spawnBodyPercentage': 0
				},{
					'name': 'shelves',
					'spawnItemPercentage': 10,
					'spawnItemType': 'sml',
					'spawnBodyPercentage': 0
				},{
					'name': 'rocking chair',
					'spawnItemPercentage': 0,
					'spawnItemType': 'null',
					'spawnBodyPercentage': 25
				}],
		'hiddenItems': ['wallpaper', 'dust', 'cobwebs'],
		'canBarricade': true,
	}];

	for(var i = 0; i < roomArray.length; i++) {
		var currentRoom = randomRoom(roomArray);

		console.log(currentRoom);
	}

	randomLayout();

}

function randomLayout() {
	var layoutArray = [];

	var layout = layoutArray[Math.floor(Math.random() * layoutArray.length)]

	console.log(layout);
}

function randomRoom(roomArray) {
	var numRooms = roomArray.length;
	var room = roomArray[Math.floor(Math.random() * numRooms)];
	var index = roomArray.indexOf(room);

	if(index > -1) {
		roomArray.splice(index, 1);
	}

	return room;
}

function randomScenario() {

}

function randomMonster() {

}

function randomItem() {

}

createHouse();