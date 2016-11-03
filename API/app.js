// Our API goes here!
const express = require('express')
var app = express()
const HTTPError = require('node-http-error')
const dal = require('../DAL/no-sql.js')
var http = require('http')
var bodyParser = require('body-parser')
//var jsonParser = bodyParser.json()
const jsonParser = bodyParser.json()
app.use(bodyParser.json())

/////////////////////////////////////////////////////////////////
///// HELPER FUNCTIONS  ///////////////
/////////////////////////////////////////////////////////////////

function callback(req, res, next) {
    return function(err, response) {
        if (err) {
            var error = buildResponseError(err, req)
            return next(new Error(error.status, error.message, error))
        }
        console.log('METHOD:', req.method, '\nPATH:', req.path, '\nRESPONSE:', response)
        res.send(response)
    }
}

function buildResponseError(err, req) {
    const statuscheck = isNaN(err.message.substring(0, 3)) === true
        ? '400'
        : err.message.substring(0, 3)
    const status = err.status
        ? Number(err.status)
        : Number(statuscheck)
    const message = err.status
        ? err.message
        : err.message.substring(3)
    const reason = message
    const error = status === 400
        ? 'Bad Request'
        : err.name
    const name = error
    var errormsg = {
        error: error,
        status: status,
        message: message,
        //method: req.method,
        //path: req.path
    }
    console.log('BuildResponseError-->', errormsg)
    return errormsg
}

function getPlayerSortBy(type, dal) {
    var sortBy;
    var options = {
        'lastName': function() {
            sortBy = dal === 'nosql'
                ? 'playerSort'
                : 'vPerson';
        },
        'email': function() {
            //email
            sortBy = dal === 'nosql'
                ? 'emailView'
                : 'vPersonEmail';
        },
        'default': function() {
            sortBy = dal === 'nosql'
                ? 'lastNameView'
                : 'vPerson';
        }
    };
    // invoke it
    (options[type] || options['default'])();
    // return a String with chosen sort
    return sortBy;
}

function getTeamSortBy(type, dalModule) {
    var sortBy
    var options = {
        'name': function() {
            sortBy = dalModule === 'nosql'
                ? 'lastname'
                : 'vPerson'
        },
        'email': function() {
            sortBy = dalModule === 'nosql'
                ? 'emailView'
                : 'vPersonEmail'
        },
        'default': function() {
            sortBy = dalModule === 'nosql'
                ? 'lastNameView'
                : 'vPerson'
        }
    }
}

/////////////////////////////////////////////////////////////////
///// GET FUNCTIONS  ///////////////
/////////////////////////////////////////////////////////////////

app.get('/players(/page/:page)?', function(req, res, next) {
    const sortByParam = req.query.sortBy || 'lastName'
    //const sortBy = getPlayerSortBy(sortByParam, 'nosql')
    const sortBy = sortByParam
    const page = req.params.hasOwnProperty('page')
        ? req.params.page
        : null
    if (page) {
        var startKey = ''
    } else {
        var startKey = req.query.sorttoken || ''
    }
    //const startKey = req.query.sortToken || ''
    const limit = req.query.limit || 5
    console.log(req.body)
    dal.listPlayer(sortBy, startKey, limit, function callback(err, data) {
        if (err) {
            var responseError = buildResponseError(err)
            return next(new HTTPError(responseError.status, responseError.message, responseError))
        }
        if (data) {
            console.log('GET', + req.path, ' query: ', req.query, data)
            res.append('Content-type', 'application/json')
            res.status(200).send(data)

        }
    })
})
app.get('/teams', function(req, res, next) {
    const sortByParam = req.query.sortBy || 'name'
    const sortBy = getTeamSortBy(sortByParam, dalModule)
    const sortToken = req.query.sorttoken || ''
    const limit = req.query.limit || 5
    dal.listTeam(sortBy, sortToken, limit, function callback(err, data) {
        if (err) {
            var responseError = buildResponseError(err)
            return next(new HTTPError(responseError.status, responseError.message, responseError))
        }
        if (data) {
            console.log('GET' + req.path, " query: ", req.query, data)
            res.append('Content-type', 'application/json')
            res.status(200).send(data)
        }
    })
})

app.get('/teams/:id', function(req, res, next) {
    const teamID = req.params.id
    console.log("team: ", teamID)
    dal.getTeam(teamID, function(err, data) {
        if (err) {
            var responseError = buildResponseError(err)
            return next(new HTTPError(responseError.status, responseError.message))
        }
        if (data) {
            res.append('Content-type', 'application/json');
            res.send(data);
        }
    })
})
app.get('/players/:id', function(req, res, next) {
    const playerID = req.params.id
    console.log("player id is: ", playerID)
    dal.getPlayer(playerID, function(err, data) {
        if (err) {
            var responseError = buildResponseError(err)
            return next(new HTTPError(responseError.status, responseError.message))
        }
        if (data) {
            res.append('Content-type', 'application/json');
            res.send(data);
        }
    })
})

app.get('*', function(req, res) {
    var body = '<h1>404 - Page Not Found</h1>'
    body += '<ul>'
    body += '<li>METHOD: ' + req.method + '</li>'
    body += '<li>PATH: ' + req.path + '</li>'
    body += '<li>QUERY: ' + JSON.stringify(req.query, null, 2) + '</li>'
    body += '</ul>'
    res.send(body)
})

/////////////////////////////////////////////////////////////////
///// POST FUNCTIONS  ///////////////
/////////////////////////////////////////////////////////////////

app.post('/players', function(req, res) {
    console.log(req.body)
    dal.createPlayer(req.body, function(err, data) {
        if (err) {
            var responseError = buildResponseError(err)
            return next(new HTTPError(responseError.status, responseError.message, responseError))
        }
        if (data) {
            res.send(data)
        }
    })
})

app.post('team', function(req, res) {
    console.log(req.body)
    dal.createTeam(req.body, function(err, data) {
        if (err) {
            var responseError = buildResponseError(err)
            return next(new HTTPError(responseError.status, responseError.messgae, responseError))
        }
        if (data) {
            res.send(data)
        }
    })
})

/////////////////////////////////////////////////////////////////
///// PUT FUNCTIONS  ///////////////
/////////////////////////////////////////////////////////////////

app.put('/players/:id', function(req, res, next) {
    dal.getPlayer(req.params.id, function callback(err, data) {
        if (err) {
            var responseError = buildResponseError(err)
            return next(new HTTPError(responseError.status, responseError.message))
        }
        if (data)
            req.body["_id"] = data["_id"]
        req.body["_rev"] = data["_rev"]
        dal.updatePlayer(req.body, function callback(updatederror, updateddata) {
            if (updatederror) {
                var responseError = buildResponseError(err)
                //console.log("Error calling dal.getReliefEffort", err)
                return next(new HTTPError(responseError.status, responseError.message))
            }
            if (updateddata) {
                console.log("DELETE " + req.path, updateddata)
                res.append('Content-type', 'application/json')
                res.status(200).send(updateddata)
            }
        })
    })
})

app.put('/teams/:id', function(req, res, next) {
    dal.getTeam(req.params.id, function callback(err, data) {
        if (err) {
            var responseError = buildResponseError(err)
            return next(new HTTPError(responseError.status, responseError.message))
        }
        if (data)
            req.body["_id"] = data["_id"]
        req.body["_rev"] = data["_rev"]
        dal.updateTeam(req.body, function callback(updatederror, updateddata) {
            if (updatederror) {
                var responseError = buildResponseError(err)
                //console.log("Error calling dal.getReliefEffort", err)
                return next(new HTTPError(responseError.status, responseError.message))
            }
            if (updateddata) {
                console.log("DELETE " + req.path, updateddata)
                res.append('Content-type', 'application/json')
                res.status(200).send(updateddata)
            }
        })
    })
})

/////////////////////////////////////////////////////////////////
///// DELETE FUNCTIONS  ///////////////
/////////////////////////////////////////////////////////////////

app.delete('/teams/:id', function(req, res, next) {
    const reliefID = req.params.id;
    // res.status(200).send({
    //   "personID": personID
    // })
    dal.getTeam(reliefID, function callback(err, data) {
        if (err) {
            var responseError = buildResponseError(err)
            return next(new HTTPError(responseError.status, responseError.message))
        }
        if (data)
            dal.deleteTeam(data, function callback(deletederror, deleteddata) {
                if (deletederror) {
                    var responseError = buildResponseError(err)
                    //console.log("Error calling dal.getReliefEffort", err)
                    return next(new HTTPError(responseError.status, responseError.message))
                }
                if (deleteddata) {
                    console.log("DELETE " + req.path, deleteddata)
                    res.append('Content-type', 'application/json')
                    res.status(200).send(deleteddata)
                }
            })
    })
})

app.delete('/players/:id', function(req, res, next) {
    const personID = req.params.id;
    // const personID = {
    //   "_id": "person_quatrobro@jrscode.edu"
    //   //"_rev": "1-68ecd07b1a7572ef1844fc3d1d9fe8b8"
    //
    //   }
    dal.getPlayer(personID, function callback(err, data) {
        if (err) {
            var responseError = buildResponseError(err)
            return next(new HTTPError(responseError.status, responseError.message))
        }
        if (data) {
            dal.deletePlayer(data, function callback(deletederr, deleteddata) {
                if (deletederr) {
                    var responseError = buildResponseError(err)
                    return next(new HTTPError(responseError.status, responseError.message))
                }
                if (deleteddata) {
                    console.log("DELETE " + req.path, deleteddata)
                    res.append('Content-type', 'application/json')
                    res.status(200).send(deleteddata)
                }

            })
        }
    })
})

/////////////////////////////////////////////////////////////////
///// ERROR FUNCTIONS  ///////////////
/////////////////////////////////////////////////////////////////

app.use(function(err, req, res, next) {
    console.log(err)
    res.status(err.status || 500)
    res.send(err.message)
})

app.get('/bad', function(req, res, next) {
    var firstErr = new HTTPError(500, 'error', {m: "Please try another route"}) //can add extra info for dev
    return next(firstErr)
})

/////////////////////////////////////////////////////////////////
///// SERVER FUNCTIONS  ///////////////
/////////////////////////////////////////////////////////////////
app.listen(3000, function() {
    console.log('Served on 3000')
})
