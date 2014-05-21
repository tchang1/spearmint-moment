var Database = require('./databaseCommunications');
var Q = require('q');

var variant2DB = 'usersVariant2';
var variant3DB = 'usersVariant3';

var variant2 = 'variant2';
var variant3 = 'variant3';

var databaseTableForVariant = function(variant) {
    var returnValue;
    if (variant == variant2) {
        returnValue = variant2DB;
    }
    else if (variant == variant3) {
        returnValue = variant3DB;
    }
    return returnValue;
};

module.exports = {
    createUser: function(number, variant) {
        var deferred = Q.defer();
        var databaseTable = databaseTableForVariant(variant);
        if (!databaseTable) {
            console.log('Invalid variant. Aborting.');
            return null;
        }

        number = number.replace(/\D/g,'');
        if (number.charAt(0) == '1') {
            number = '+' + number;
        }
        else {
            number = '+1' + number;
        }
        if (number.length == 12) {
            Database.findOne(databaseTable, {number: number}).then(
                function(success) {
                    if (!success) {
                        var user;
                        if (variant == variant2) {
                            user = {
                                number: number,
                                ftuSent: "No",
                                totalSaved: "0",
                                respondedToCommit: "No",
                                commitAmount: "0"
                            };
                        }
                        if (variant == variant3) {
                            user = {
                                number: number,
                                ftuSent: "No",
                                totalSaved: "0",
                                savedToday: "0"
                            };
                        }
                        console.log('Adding user: ' + number);
                        Database.insert(databaseTable, user).then(
                            function(result) {
                                deferred.resolve(result);
                            },

                            function(error) {
                                deferred.reject(error);
                            }
                        );
                    }
                },

                function(error) {
                    deferred.reject(error);
                }
            );
        }
        else {
            console.log("User entered an invalid number "+req.params.number);
            deferred.reject("User entered an invalid number "+req.params.number);
        }

        return deferred.promise;
    },

    getAllValidNumbers: function(variant){
        var deferred = Q.defer();

        var databaseTable = databaseTableForVariant(variant);
        if (!databaseTable) {
            console.log('Invalid variant. Aborting');
            return null;
        }
        Database.find(databaseTable, {}).then(
            function(validNumbers) {
                deferred.resolve(validNumbers);
            },

            function(error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    },

    getUser: function(number, variant) {
        var deferred = Q.defer();
        var databaseTable = databaseTableForVariant(variant);

        if (databaseTable) {
            Database.findOne(databaseTable, {number:number}).then(
                function(user) {
                    if (user) {
                        deferred.resolve(user);
                    }
                    else {
                        deferred.reject('user not found');
                    }
                },
                function (error) {
                    deferred.reject(error);
                }
            );
        }
        else {
            deferred.reject('Invalid variant');
        }
        return deferred.promise;
    },

    saveUser: function(user, variant) {
        var deferred = Q.defer();
        var databaseTable = databaseTableForVariant(variant);

        if (databaseTable) {
            Database.update(databaseTable, {number: user.number}, user).then(
                function(success) {
                    deferred.resolve(success);
                },
                function(error) {
                    deferred.reject(error);
                });
        }
        else {
            deferred.reject('Invalid variant');
        }

        return deferred.promise;
    },

    resetAllUserPrompts: function(variant) {
        var deferred = Q.defer();
        var databaseTable = databaseTableForVariant(variant);
        if (!databaseTable) {
            console.log('Invalid variant. Aborting.');
            return null;
        }
        Database.updateAll(databaseTable, {}, {$set: {respondedToCommit:"No"}}).then(
            function(success) {
                deferred.resolve(success);
            },
            function(error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    },
};
