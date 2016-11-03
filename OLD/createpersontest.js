var dalNoSQL = require('./DAL/no-sql.js')

var person = {
    type: "person",
    firstName: "Joshua",
    lastName: "Smith",
    phone: "307-262-6835",
    email: "joshua.aaron.smith17@gmail.com"
}

var ringMyPhone = function(err, createdPersonInCouch) {
    if (err) {
        return err.message
    }
    return createdPersonInCouch
}

console.log(dalNoSQL.createPerson(person, ringMyPhone))
