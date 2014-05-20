var Q = require('q');
var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('userdb', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'userdb' database");
        db.collection('users', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'users' collection doesn't exist. Creating it with sample data...");
//                console.log(UserService);
//                var users = [
//                    UserService.createUser("+11111111111")
//                ];
//
//                db.collection('users', function(err, collection) {
//                    collection.insert(users, {safe:true}, function(err, result) {});
//                });
            }
            else {
            }
        });
    }
});

module.exports.insert = function(table, opject) {
    var deferred = Q.defer();
    db.collection(table, function(err, collection) {
        collection.insert(opject, {safe:true}, function(err, result) {
            if (err) {
                console.log(err);
                deferred.reject(err);

            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                deferred.resolve(result[0]);
            }
        });
    });
    return deferred.promise;
};

module.exports.findOne = function(table, query) {
    var deferred = Q.defer();
    db.collection(table, function(err, collection) {
        collection.findOne(query, function(err, result) {
            if (err) {
                console.log(err);
                deferred.reject(err);

            } else {
                console.log(result);
                deferred.resolve(result);
            }
        });
    });
    return deferred.promise;
};

module.exports.objectExists = function(table, query) {
    var deferred = Q.defer();
    Database.findOne(table, query).then(
        function(result) {
            deferred.resolve(result ? true : false);
        },

        function(error) {
            deferred.reject(error);
        }
    );
    return deferred.promise;
};

module.exports.find = function(table, query) {
    var deferred = Q.defer();
    db.collection(table, function(err, collection) {
        collection.find(query, function(err, result) {
            if (err) {
                console.log(err);
                deferred.reject(err);

            } else {
                console.log('Success: ' + JSON.stringify(result));
                result.toArray(function(err, items) {
                    deferred.resolve(items);
                });
            }
        });
    });
    return deferred.promise;
};

module.exports.update = function(table, query, newObject) {
    var deferred = Q.defer();
    console.log('new object:');
    console.log(newObject);
    db.collection(table, function(err, collection) {
        collection.update(query, newObject, {safe:true}, function(err, result) {
            if (err) {
                deferred.reject(err);
            } else {
                console.log(result);
                deferred.resolve(result);
            }
        });
    });
    return deferred.promise;
};

module.exports.updateAll = function(table, query, newObject) {
    var deferred = Q.defer();
    console.log('new object:');
    console.log(newObject);
    db.collection(table, function(err, collection) {
        collection.update(query, newObject, {safe:true, multi:true}, function(err, result) {
            if (err) {
                deferred.reject(err);
            } else {
                console.log(result);
                deferred.resolve(result);
            }
        });
    });
    return deferred.promise;
};