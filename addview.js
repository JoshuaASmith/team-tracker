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

var designDoc2 = {
    _id: '_design/infielders',
    views: {
        'infielderSort': {
            map: function(doc) {
                if (doc.position === 'Infielder') {
                    emit([doc.lastName], {'name': doc.lastName})
                }
            }.toString()
        }
    }
}

var designDoc3 = {
    _id: '_design/outfielders',
    views: {
        'outfielderSort': {
            map: function(doc) {
                if (doc.position === 'Outfielder') {
                    emit([doc.lastName], {'name': doc.lastName})
                }
            }.toString()
        }
    }
}

var designDoc4 = {
    _id: '_design/pitchers',
    views: {
        'pitcherSort': {
            map: function(doc) {
                if (doc.postion === 'Pitcher') {
                    emit([
                        doc.lastName, doc.postion
                    ], {'name': doc.lastName})
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

dalNoSQL.createView(designDoc2, function callback(err, data) {
    if (err) {
        return console.log(err)
    }
    if (data) {
        return console.log(data)
    }
})

dalNoSQL.createView(designDoc3, function callback(err, data) {
    if (err) {
        return console.log(err)
    }
    if (data) {
        return console.log(data)
    }
})

dalNoSQL.createView(designDoc4, function callback(err, data) {
    if (err) {
        return console.log(err)
    }
    if (data) {
        return console.log(data)
    }
})
