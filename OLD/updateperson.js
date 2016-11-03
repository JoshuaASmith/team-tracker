var dalNoSQL = require('./DAL/no-sql.js')

var updatePerson = {
    //_id: "person_stevean",
    _id: "person_stevean@duke.edu",
    _rev: "1-ed39e13cc987a5cd5ce3817bd3bda3fc",
    name: "Joshua"
}

var ringMyPhone = function(err, updatePersonInCouch) {
    if (err) {
        return err.message
    }
    return updatePersonInCouch
}

console.log(dalNoSQL.updatePerson(updatePerson, ringMyPhone))
