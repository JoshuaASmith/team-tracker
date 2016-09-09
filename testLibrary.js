/*jshint esversion: 6 */
const dalNoSQL = require('./DAL/noSQL.js');

const path = require('path');
const PouchDB = require('pouchdb-http');
PouchDB.plugin(require('pouchdb-mapreduce'));
const fetchConfig = require('zero-config');
//const uuid = require('node-uuid');

var config = fetchConfig(path.join(__dirname, '.'), {
    dcValue: 'test'
});

const couch_base_uri = config.get("couch.baseURI") + ':' + config.get("couch.port") + "/";
const couch_dbname = config.get("couch.dbName");
const db = new PouchDB(couch_base_uri + couch_dbname);

function removeDoc(data) {

    var removeDoc = {
        _id: data.id,
        _rev: data.rev
    }

    db.remove(removeDoc, function(err, response) {
        if (err) console.log(err);
    });
}

function missingPersonDataTest(data, withOrWithout, test, number, remove) {
    dalNoSQL.createPerson(data, function callback(err, response) {
        if (err) {
            console.log("Test #", number, ": Success --> createPerson() prevented me from adding a person ", withOrWithout, test,  ". Message: ", err.message);
        }
        if (response && response.ok === true) {
            console.log("Test #",number, ": Fail --> createPerson() allowed me to add ", response.id ," to the database ", withOrWithout, test);
            if (remove) {
                removeDoc(response);
            }
        }
    });
}

function AddPersonTest(data, number, remove) {
    dalNoSQL.createPerson(data, function callback(err, response) {
        if (err) {
            console.log("Test #",number, ": Fail --> createPerson() did not add person to the database.", data);
        }
        if (response && response.ok === true) {
            console.log("Test #",number, ": Success --> createPerson() allowed me to add ", response.id ," to the database. ");
            if (remove) {
                removeDoc(response);
            }
        }
    });
}

function missingReliefEffortDataTest(data, withOrWithout, test, number, remove) {
    dalNoSQL.createReliefEffort(data, function callback(err, response) {
        if (err) {
            console.log("Test #", number, ": Success --> createReliefEffort() prevented me from adding a relief effort ", withOrWithout, test,  ". Message: ", err.message);
        }
        if (response && response.ok === true) {
            console.log("Test #",number, ": Fail --> createReliefEffort() allowed me to add ", response.id ," to the database ", withOrWithout, test);
            if (remove) {
                removeDoc(response);
            }
        }
    });
}

function AddReliefEffortTest(data, number, remove) {
    dalNoSQL.createReliefEffort(data, function callback(err, response) {
        if (err) {
            console.log("Test #",number, ": Fail --> createReliefEffort() did not add relief effort to the database.", data);
        }
        if (response && response.ok === true) {
            console.log("Test #",number, ": Success --> createReliefEffort() allowed me to add ", response.id ," to the database. ");
            if (remove) {
                removeDoc(response);
            }
        }
    });
}

function createPerson() {

    const PersonWithMissingEmail = {
        type: "person",
        firstName: "Jeff",
        lastName: "Cave",
        phone: "843 333-1111"
    };

    const PersonWithMissingFirst = {
        type: "person",
        lastName: "Tucker",
        phone: "843 123-4567",
        email: "tuckerT@comcast.net"
    };

    const PersonWithMissingLast = {
        type: "person",
        firstName: "T",
        phone: "843 123-4567",
        email: "tuckerT@comcast.net"
    };

    const PersonWith_id = {
        _id: "someid",
        type: "person",
        firstName: "T",
        lastName: "Tucker",
        phone: "843 123-4567",
        email: "tuckerT@comcast.net"
    };

    const PersonWithNoProblems = {
        type: "person",
        firstName: "George",
        lastName: "Washington",
        phone: "843 323-3434",
        email: "george@yahoo.com"
    };

    missingPersonDataTest(PersonWithMissingEmail, "without", "Email", 1, true);
    missingPersonDataTest(PersonWithMissingFirst,  "without", "First Name", 2, true);
    missingPersonDataTest(PersonWithMissingLast,  "without", "Last Name", 3, true);
    missingPersonDataTest(PersonWith_id,  "with", "_id", 4, true);
    AddPersonTest(PersonWithNoProblems, 5, true)
}

function createReliefEffort() {

    const ReliefEffortWithMissingName = {
        "phase": "completed",
        "organizationID": "Disaster Helpers",
        "desc": "Disaster 1",
        "start": "2005-08-23",
        "end": "2005-09-31",
        "active": true
    };

    const ReliefEffortWithMissingOrgID = {
        "phase": "completed",
        "name": "Disaster 2",
        "desc": "Disaster 2",
        "start": "2005-08-23",
        "end": "2005-09-31",
        "active": true
    };

    const ReliefEffortWithMissingPhase = {
        "organizationID": "Disaster Helpers",
        "name": "Disaster 3",
        "desc": "Disaster 3",
        "start": "2005-08-23",
        "end": "2005-09-31",
        "active": true
    };

    const ReliefEffortWith_id = {
        "_id": "someid",
        "phase": "completed",
        "organizationID": "Disaster Helpers",
        "name": "Disaster 3",
        "desc": "Disaster 3",
        "start": "2005-08-23",
        "end": "2005-09-31",
        "active": true
    };

    const ReliefEffortNoProblems = {
        "phase": "completed",
        "name": "Hurricane Camille 1968",
        "organizationID": "Hurricane Helpers",
        "desc": "Provide water purification systems. Hurricane Camille was a storm.",
        "start": "2005-08-23",
        "end": "2005-09-31",
        "active": true
    };

    missingReliefEffortDataTest(ReliefEffortWithMissingName, "without", "Name", 1, true);
    missingReliefEffortDataTest(ReliefEffortWithMissingOrgID,  "without", "Organization ID", 2, true);
    missingReliefEffortDataTest(ReliefEffortWithMissingPhase,  "without", "Phase", 3, true);
    missingReliefEffortDataTest(ReliefEffortWith_id,  "with", "_id", 4, true);
    AddReliefEffortTest(ReliefEffortNoProblems, 5, true);
}


var testLibrary= {
    createPerson: createPerson,
    createReliefEffort: createReliefEffort
};

module.exports = testLibrary;
