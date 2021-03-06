const dalNoSQL = require('./DAL/no-sql.js')

var listPlayerCallback = function(err, response) {
    if (err)
        return console.log(err.message)
    console.log(JSON.stringify(response.rows, null, 2))
}

var sortBy = ''
var startKey = ''
var limit = 2

dalNoSQL.listPlayer(sortBy, startKey, limit, listPlayerCallback)
