const dalNoSQL = require('./DAL/no-sql.js')

var designDoc = {
    _id: '_design/playerSort',
    views: {
        'playerSort': {
            map: function(doc) {
                if (doc.type === 'player') {
                    emit([doc.lastName], {'name': doc.lastName})
                }
            }.toString()
        }
    }
}

dalNoSQL.createView(designDoc, function callback(err, data) {
    if (err) {
        return console.log(err)
    }
    if (data) {
        console.log(data)
    }
})
