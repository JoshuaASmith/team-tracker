const path = require('path')
const PouchDB = require('pouchdb-http')
PouchDB.plugin(require('pouchdb-mapreduce'))
const fetchConfig = require('zero-config')
var config = fetchConfig(path.join(__dirname, '..'), {dcValue: 'test'})
const urlFormat = require('url').format
const db = new PouchDB(urlFormat(config.get("couch")))

function getDBInfo() {
    return "Success!"
}

var dal = {
    getDBInfo: getDBInfo,
    getPlayer: getPlayer,
    getTeam: getTeam,
    updatePlayer: updatePlayer,
    updateTeam: updateTeam,
    deletePlayer: deletePlayer,
    deleteTeam: deleteTeam,
    listPlayer: listPlayer,
    listTeam: listTeam,
    createPlayer: createPlayer,
    createTeam: createTeam,
    createView: createView
}

///////////////////////////////////////////////////////////////////////////
//                          UTILITY FUNCTIONS
///////////////////////////////////////////////////////////////////////////

function getDocByID(id, callback) {
    if (typeof id == 'undefined' || data === null) {
        return callback(new Error('400Missing data for update'))
    } else {
        db.get(data, function(err, response) {
            if (err) {
                return callback(err)
            }
            if (response) {
                return callback(null, response)
            }
        })
    }
}

function updateDoc(data, callback) {
    if (typeof data == "undefined" || data === null) {
        return callback(new Error('400Missing data for update'))
    } else {
        db.put(data, function(err, response) {
            if (err) {
                return callback(err)
            }
            if (response) {
                return callback(null, response)
            }
        })
    }
}

function deleteDoc(data, callback) {
    if (typeof data == "undefined" || data === null) {
        return callback(new Error('400Missing data for delete'))
    } else {
        db.remove(data, function(err, response) {
            if (err) {
                return callback(err)
            }
            if (response) {
                return callback(null, response)
            }
        })
    }
}

function queryDB(sortBy, startKey, limit, callback) {
    if (typeof sortBy == 'undefined' || sortBy === null) {
        return callback(new Error('400 Missing data for query'), null)
    } else {
        limit = startKey !== ''
            ? limit + 1
            : limit
        console.log("sortBy:", sortBy, " startKey: ", startKey, " limit: ", limit)
        db.query(sortBy, {
            startKey: '',
            limit: limit,
            include_docs: true
        }, function(err, response) {
            if (err) {
                return callback(err)
            }
            if (result) {
                if (startKey !== '') {
                    response.rows.shift()
                }
                callback(null, response.rows.map(convertPersons))
            }
        })
    }
}

function createView(designDoc, callback) {
    if (typeof designDoc == 'undefined' || designDoc === null) {
        return callback(new Error('400 Missing data for createView'))
    } else {
        db.put(designDoc, function(err, response) {
            if (err) {
                return callback(err)
            }
            if (response) {
                return callback(null, response)
            }
        })
    }
}

var convertPersons = function(queryRow) {
    queryRow.doc.sortToken = queryRow.key
    return queryRow.doc
}

///////////////////////////////////////////////////////////////////////////
//                              PERSONS
///////////////////////////////////////////////////////////////////////////

function getPlayer(id, callback) {
    getDocByID(id, callback)
}

function updatePlayer(data, callback) {
    updateDoc(data, callback)
}

function deletePlayer(data, callback) {
    deleteDoc(data, callback)
}

function listPlayer(sortBy, startKey, limit, callback) {
    queryDB(sortBy, startKey, limit, callback)
}

function createPlayer(data, callback) {
    if (typeof data == "undefined" || data === null) {
        return callback(new Error('400Missing data for create'))
    } else {
        data.active = true
        data.type = 'player'
        data._id = 'player_' + data.lastName + data.team
        db.put(data, function(err, response) {
            if (err) {
                return callback(err)
            }
            if (response) {
                return callback(null, response)
            }
        })
    }
}

///////////////////////////////////////////////////////////////////////////
//                              TEAMS
///////////////////////////////////////////////////////////////////////////

function getTeam(id, callback) {
    getDocByID(id, callback)
}

function updateTeam(data, callback) {
    updateDoc(data, callback)
}

function deleteTeam(data, callback) {
    deleteDoc(data, callback)
}

function listTeam(sortBy, startKey, limit, callback) {
    queryDB(sortBy, startKey, limit, callback)
}

function createTeam(data, callback) {
    if (typeof data == 'undefined' || data === null) {
        return callback(new Error('400 Missing data'))
    } else {
        data.active = true
        data.type = 'team'
        data._id = 'team_' + data.teamName + data.cityName
        db.put(data, function(err, response) {
            if (err) {
                return callback(err)
            }
            if (response) {
                return callback(null, response)
            }
        })
    }
}

module.exports = dal
