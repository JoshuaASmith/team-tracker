var dalNoSQL = require('./DAL/no-sql.js')

var relief = {
    //_id: "relief_St_Phillips_Haiti_2015",
    type: "relief",
    phase: "completed",
    name: "DR 2016",
    organizationID: "St. johns",
    desc: "Help with the stuff in remote village of Gros Mangle in the island of La Gonave, DR. Home base is located in the main town of Anse - à - Galets at the St.François d’ Assise church and school.",
    start: "2015-09-25",
    end: "2015-10-01",
    team: [
        {
            name: "Matt",
            role: "Team Ruiner",
            personID: "person_stevean@duke.edu"
        }, {
            name: "Jared ",
            role: "Team member",
            personID: "person_lsat1972@gmail.com"
        }, {
            name: "Trip Jones",
            role: "Team member",
            personID: "person_judy5555@aol.com"
        }
    ]
}

var ringMyPhone = function(err, createdReliefInCouch) {
    if (err) {
        return err.message
    }
    return createdReliefInCouch
}

console.log(dalNoSQL.createReliefEffort(relief, ringMyPhone))
