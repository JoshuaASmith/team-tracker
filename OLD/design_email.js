var dalNoSQL = require('./DAL/no-sql.js')

var designEmail = {
    _id: '_design/emails_all',
    views: {
        emails_by_name: {
            map: function(doc) {
                if (doc.type === 'person') {
                    emit(doc.email + doc.name);
                }
            }.toString()
        }
    }
}

var designLastName = {
    _id: '_design/lastName_all',
    views: {
        lastNameSort: {
            map: function(doc) {
                if (doc.type === 'person') {
                    emit(doc.lastName + doc.name)
                }
            }.toString()
        }
    }
}

var designReliefEfforts = {
    _id: '_design/reliefEffort',
    views: {
        reliefEffortSort: {
            map: function(doc) {
                if (doc.type === 'relief') {
                    emit(doc.name)
                }
            }.toString()
        }
    }
}

console.log(dalNoSQL.createView(designEmail))
console.log(dalNoSQL.createView(designLastName))
console.log(dalNoSQL.createView(designReliefEfforts))
