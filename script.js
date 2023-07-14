const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

var team = players;
var team1 = players.map((element) => element);
var cap1 = {
	name: person.name,
	age: person.age,
};

// Write ur code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
