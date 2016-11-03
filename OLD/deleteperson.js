var dalNoSQL = require('./DAL/no-sql.js')

var deletePerson = {
    //_id: "person_stevean",
    _id: "",
    _rev: ""
}

var ringMyPhone = function(err, deletedPersonInCouch) {
    if (err) {
        return err.message
    }
    return deletedPersonInCouch
}

console.log(dalNoSQL.deletePerson(deletePerson, ringMyPhone))
