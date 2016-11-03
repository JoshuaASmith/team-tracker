const dalNoSQL = require('./DAL/no-sql.js');

// person data. Use to test the createPerson() function within your DAL,
// Make INDIVIDUAL calls to the createPerson() function within your DAL
// with each person within the array.
const playerData = [
    {
        team: "Atlanta Braves",
        firstName: "Aaron",
        lastName: "Blair",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Mauricio",
        lastName: "Cabrera",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Josh",
        lastName: "Collmenter",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Brandon",
        lastName: "Cunniff",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Mike",
        lastName: "Foltynewicz",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "John",
        lastName: "Gant",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Jason",
        lastName: "Hursh",
        postion: "Pitcher",
        type: "player",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Tyrell",
        lastName: "Jenkins",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Jim",
        lastName: "Johnson",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Casey",
        lastName: "Kelly",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Ian",
        lastName: "Krol",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Akeel",
        lastName: "Morris",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Williams",
        lastName: "Perez",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Jose",
        lastName: "Ramirez",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Chaz",
        lastName: "Roe",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Shae",
        lastName: "Simmons",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Julio",
        lastName: "Teheran",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Arodys",
        lastName: "Vizcaino",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Ryan",
        lastName: "Weber",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Matt",
        lastName: "Wisler",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Chris",
        lastName: "Withrow",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Tyler",
        lastName: "Flowers",
        postion: "Catcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Anthony",
        lastName: "Recker",
        postion: "Catcher",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Emilio",
        lastName: "Bonifacio",
        postion: "Outfielder",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Ender",
        lastName: "Inciarte",
        postion: "Outfielder",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Matt",
        lastName: "Kemp",
        postion: "Outfielder",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Nick",
        lastName: "Markakis",
        postion: "Outfielder",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Mallex",
        lastName: "Smith",
        postion: "Outfielder",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Chase",
        lastName: "d/'Arnaud'",
        postion: "Infielder",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Freddie",
        lastName: "Freeman",
        postion: "Infielder",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Adonis",
        lastName: "Garcia",
        postion: "Infielder",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Jace",
        lastName: "Peterson",
        postion: "Infielder",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Rio",
        lastName: "Ruiz",
        postion: "Infielder",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Dansby",
        lastName: "Swanson",
        postion: "Infielder",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Brian",
        lastName: "Snitker",
        postion: "Manager",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Chuck",
        lastName: "Hernandez",
        postion: "Pitching Coach",
        type: "player"
    }, {
        team: "Atlanta Braves",
        firstName: "Kevin",
        lastName: "Seitzer",
        postion: "Hitting Coach",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Tyler",
        lastName: "Anderson",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Chad",
        lastName: "Bettis",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Eddie",
        lastName: "Butler",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Matt",
        lastName: "Carasiti",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Tyler",
        lastName: "Chatwood",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Jorge",
        lastName: "de la Rosa",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Carlos",
        lastName: "Estevez",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Jon",
        lastName: "Gray",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Jeff",
        lastName: "Hoffman",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Boone",
        lastName: "Logan",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Jordan",
        lastName: "Lyles",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "German",
        lastName: "Marzuez",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Jake",
        lastName: "McGee",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Jason",
        lastName: "Motte",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Adam",
        lastName: "Ottavino",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Chad",
        lastName: "Qualls",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Chris",
        lastName: "Rusin",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Antonio",
        lastName: "Senzatela",
        postion: "Pitcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Dustin",
        lastName: "Garneau",
        postion: "Catcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Nick",
        lastName: "Hundley",
        postion: "Catcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Tom",
        lastName: "Murphy",
        postion: "Catcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Tony",
        lastName: "Wolters",
        postion: "Catcher",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Chisthian",
        lastName: "Adames",
        postion: "Infielder",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Charlie",
        lastName: "Blackmon",
        postion: "Outfielder",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Stephen",
        lastName: "Cardullo",
        postion: "Outfielder",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "David",
        lastName: "Dahl",
        postion: "Outfielder",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Carlos",
        lastName: "Gonzalez",
        postion: "Outfielder",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Gerardo",
        lastName: "Parra",
        postion: "Outfielder",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Jordan",
        lastName: "Patterson",
        postion: "Outfielder",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Ryan",
        lastName: "Raburn",
        postion: "Outfielder",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Raimel",
        lastName: "Tapia",
        postion: "Outfielder",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Nolan",
        lastName: "Arenado",
        postion: "Infielder",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Daniel",
        lastName: "Descalso",
        postion: "Infielder",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Vacant",
        lastName: "Vacant",
        postion: "Manager",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Steve",
        lastName: "Foster",
        postion: "Pitching Coach",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "DJ",
        lastName: "LeMahieu",
        postion: "Infielder",
        type: "player"
    }, {
        team: "Colorado Rockies",
        firstName: "Mark",
        lastName: "Reynolds",
        postion: "Infielder",
        type: "player"
    }
]

function callback(msgHeader) {
    return function(err, response) {
        if (err)
            return console.log('ERROR:\n', err.message)
        return console.log(msgHeader, response)
    }
}

playerData.forEach(function(player) {
    dalNoSQL.createPlayer(player, callback('Player CREATED:\n'))
})
