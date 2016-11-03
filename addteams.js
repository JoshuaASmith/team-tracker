const dalNoSQL = require('./DAL/no-sql.js');

const teamData = [
    {
        teamName: "Los Angeles Angels",
        cityName: "Anaheim",
        stateName: "California",
        stadiumName: "Angel Stadium of Anaheim",
        type: "team"
    }, {
        teamName: "San Francisco Giants",
        cityName: "San Francisco",
        stateName: "California",
        stadiumName: "AT/&T Park",
        type: "team"
    }, {
        teamName: "St. Louis Cardinals",
        cityName: "St. Louis",
        stateName: "Missouri",
        stadiumName: "Busch Stadium",
        type: "team"
    }, {
        teamName: "Arizona Diamondbacks",
        cityName: "Phoenix",
        stateName: "Arizona",
        stadiumName: "Chase Field",
        type: "team"
    }, {
        teamName: "New York Mets",
        cityName: "Queens",
        stateName: "New York",
        stadiumName: "Citi Field",
        type: "team"
    }, {
        teamName: "Philadelphia Phillies",
        cityName: "Philadelphia",
        stateName: "Pennsylvania",
        stadiumName: "Citizens Bank Park",
        type: "team"
    }, {
        teamName: "Detroit Tigers",
        cityName: "Detroit",
        stateName: "Michigan",
        stadiumName: "Comerica Park",
        type: "team"
    }, {
        teamName: "Denver Rockies",
        cityName: "Denver",
        stateName: "Colorado",
        stadiumName: "Coors Field",
        type: "team"
    }, {
        teamName: "Los Angeles Dodgers",
        cityName: "Los Angeles",
        stateName: "California",
        stadiumName: "Dodger Stadium",
        type: "team"
    }, {
        teamName: "Boston Red Sox",
        cityName: "Boston",
        stateName: "Massachusetts",
        stadiumName: "Fenway Park",
        type: "team"
    }, {
        teamName: "Texas Rangers",
        cityName: "Arlington",
        stateName: "Texas",
        stadiumName: "Globe Life Park in Arlington",
        type: "team"
    }, {
        teamName: "Cincinnati Reds",
        cityName: "Cincinnati",
        stateName: "Ohio",
        stadiumName: "Great American Ball Park",
        type: "team"
    }, {
        teamName: "Chicago White Sox",
        cityName: "Chicago",
        stateName: "Illinois",
        stadiumName: "Guaranteed Rate Field",
        type: "team"
    }, {
        teamName: "Kansas City Royals",
        cityName: "Kansas City",
        stateName: "Missouri",
        stadiumName: "Kauffman Stadium",
        type: "team"
    }, {
        teamName: "Miami Marlins",
        cityName: "Miami",
        stateName: "Florida",
        stadiumName: "Marlins Park",
        type: "team"
    }, {
        teamName: "Milwaukee Brewers",
        cityName: "Milwaukee",
        stateName: "Wisconsin",
        stadiumName: "Miller Park",
        type: "team"
    }, {
        teamName: "Houston Astros",
        cityName: "Houston",
        stateName: "Texas",
        stadiumName: "Minute Maid Park",
        type: "team"
    }, {
        teamName: "Washington Nationals",
        cityName: "Washington",
        stateName: "Distric of Columbia",
        stadiumName: "Nationals Park",
        type: "team"
    }, {
        teamName: "Baltimore Orioles",
        cityName: "Baltimore",
        stateName: "Maryland",
        stadiumName: "Oriole Park at Camden Yards",
        type: "team"
    }, {
        teamName: "San Diego Padres",
        cityName: "San Diego",
        stateName: "California",
        stadiumName: "Petco Park",
        type: "team"
    }, {
        teamName: "Pitssburgh Pirates",
        cityName: "Pittsburgh",
        stateName: "Pennsylvania",
        stadiumName: "PNC Park",
        type: "team"
    }, {
        teamName: "Cleveland Indians",
        cityName: "Cleveland",
        stateName: "Ohio",
        stadiumName: "Progressive Field",
        type: "team"
    }, {
        teamName: "Toronto Blue Jays",
        cityName: "Toronto",
        stateName: "Ohio",
        stadiumName: "Rogers Centre",
        type: "team"
    }, {
        teamName: "Minnesota Twins",
        cityName: "Minneapolis",
        stateName: "Minnesota",
        stadiumName: "Target Field",
        type: "team"
    }, {
        teamName: "Seattle Mariners",
        cityName: "Seattle",
        stateName: "Washington",
        stadiumName: "Safeco Field",
        type: "team"
    }, {
        teamName: "Tampa Bay Rays",
        cityName: "Tampa",
        stateName: "Florida",
        stadiumName: "Tropicana Field",
        type: "team"
    }, {
        teamName: "Atlanta Braves",
        cityName: "Atlanta",
        stateName: "Georgia",
        stadiumName: "Turner Field",
        type: "team"
    }, {
        teamName: "Chicago Cubs",
        cityName: "Chicago",
        stateName: "Illinois",
        stadiumName: "Wrigley Field",
        type: "team"
    }, {
        teamName: "New York Yankees",
        cityName: "Bronx",
        stateName: "New York",
        stadiumName: "Yankee Stadium",
        type: "team"
    }
]

function callback(msgHeader) {
    return function(err, response) {
        if (err)
            return console.log('ERROR:\n', err.message)
        return console.log(msgHeader, response)
    }
}

teamData.forEach(function(team, index) {
    dalNoSQL.createTeam(team, callback('Team CREATED:\n'))
})
