const players = [
    {id: 12, name: "Sakib"},
    {id: 15, name: "Masrafee"},
    {id: 18, name: "Musfiq"},
    {id: 20, name: "Tamim"},
];
const names = players.map(p => p.name);
const ids = players.map(p => p.id);
const bigger = players.filter(p => p.id > 15);
const bigger1 = players.find(p => p.id > 15);
console.log(bigger1);