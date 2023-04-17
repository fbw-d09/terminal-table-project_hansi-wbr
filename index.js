// wir importieren unser Table klasse
const Table = require('./src/Table');

const columns = 
[
    {
        key: "id",
        title: "#",
        width: 10
    },
    {
        key: "name",
        title: "Name",
        width: 25
    },
    {
        key:"group",
        title:"gruppe",
        width: 15
    },
    {
        key:"role",
        title:"rolle",
        width: 50
    }
    ,


];

// wir erstellen unsere rows
const rows = 
[
    {
        id: 1,
        name: "jana",
        group: "klasse",
        role: "schüler"
    },
    {
        id: 2,
        name: "paul",
        group: "Lead",
        role: "Class manager"
    },
    {
        id: 3,
        name: "mandy",
        group: "klasse",
        role: "Assistant"
    }
];

// wir erstellen eine instanz von Table
const table = new Table({
    title: "unsere Tabelle",
    width: 100,
    columns,
    rows
});

// // wir erwarten das die Table klasse ausgeben wird
// console.log(table);
// // wir erwarten das der title in der mitte ausgegeben wird
// console.log(table.createTitle());

// // console.log(table.createColum("hallo Welt",25));
// console.log(table.createRow(rows[0]));

table.showTable();