var dalNoSQL = require('./DAL/no-sql.js')

var deleteRelief = {
    //_id: "relief_St_Phillips_Haiti_2015",
    "_id": "relief_St_johns_DR_2016",
    "_rev": "3-5064c58c126d0860568b667b9831a0c8"
}

var ringMyPhone = function(err, deletedReliefInCouch) {
    if (err) {
        return err.message
    }
    return deletedReliefInCouch
}

console.log(dalNoSQL.deleteReliefEffort(deleteRelief, ringMyPhone))
