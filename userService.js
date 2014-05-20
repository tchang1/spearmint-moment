var Database = require('./databaseCommunications');
var Q = require('q');

module.exports = {
    createUser: function(number) {
        var user = {
            number: number,
            ftuSent: "No",
            totalSaved: "0",
            savedToday: "0",
            respondedToCommit: "No",
            commitAmount: "0"
        };
        return user;
    },

    getAllValidNumbers: function(){
        var deferred = Q.defer();
        Database.find('users', {}).then(
            function(validNumbers) {
                deferred.resolve(validNumbers);
            },

            function(error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    },

    markFTUSent: function(number) {
        var deferred = Q.defer();
        Database.findOne('users', {number:number}).then(
            function(user) {
                if (user) {
                    user.ftuSent = 'Yes';

                    Database.update('users', {number: user.number}, user).then(
                    function(success) {
                        console.log("Logging db success:")
                        console.log(success);
                        deferred.resolve(success);
                    },
                    function(error) {
                        deferred.reject(error);
                    });
                }
                else {
                    deferred.reject('user not found');
                }
            },
            function (error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    },

    unmarkFTUSent: function(number) {
        var deferred = Q.defer();
        Database.findOne('users', {number:number}).then(
            function(user) {
                if (user) {
                    user.ftuSent = 'No';

                    Database.update('users', {number: user.number}, user).then(
                    function(success) {
                        console.log("Logging db success:")                        
                        console.log(success);
                        deferred.resolve(success);
                    },
                    function(error) {
                        deferred.reject(error);
                    });
                }
                else {
                    deferred.reject('user not found');
                }
            },
            function (error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    },

    hasReceivedFTU: function(number) {
        var deferred = Q.defer();
        Database.findOne('users', {number:number}).then(
            function(user) {
                if (user) {
                   deferred.resolve(user.ftuSent);
                }
                else {
                    deferred.reject('user not found');
                }
            },
            function (error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    },

    hasRespondedToMostRecentPrompt: function(number) {
        var deferred = Q.defer();
        Database.findOne('users', {number:number}).then(
            function(user) {
                if (user) {
                   deferred.resolve(user.respondedToCommit);
                }
                else {
                    deferred.reject('user not found');
                }
            },
            function (error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    },

    setRespondedToMostRecentPrompt: function(number) {
        var deferred = Q.defer();
        Database.findOne('users', {number:number}).then(
            function(user) {
                if (user) {
                    user.respondedToCommit = 'Yes';

                    Database.update('users', {number: user.number}, user).then(
                        function(success) {
                            console.log("Logging db success:")
                            console.log(success);
                            deferred.resolve(success);
                        },
                        function(error) {
                            deferred.reject(error);
                        });
                }
                else {
                    deferred.reject('user not found');
                }
            },
            function (error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    },

    resetAllUserPrompts: function() {
        var deferred = Q.defer();
            Database.updateAll('users', {}, {$set: {respondedToCommit:"No"}}).then(
                function(success) {
                    deferred.resolve(success);
                },
                function(error) {
                    deferred.reject(error);
                }
            );
        return deferred.promise;
    },

    getSavedAmountForUserToday: function(number) {
        var deferred = Q.defer();
        Database.findOne('users', {number:number}).then(
            function(user) {
                if (user) {
                    deferred.resolve(user.savedToday);
                }
                else {
                    deferred.reject('user not found');
                }
            },
            function (error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    },

    setSavedAmountForUserToday: function(number, newAmount) {
        var deferred = Q.defer();
        Database.findOne('users', {number:number}).then(
            function(user) {
                if (user) {
                    user.savedToday = newAmount;

                    Database.update('users', {number: user.number}, user).then(
                        function(success) {
                            deferred.resolve(success);
                        },
                        function(error) {
                            deferred.reject(error);
                        });
                }
                else {
                    deferred.reject('user not found');
                }
            },
            function (error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    },

    getCommitAmountForUserToday: function(number) {
        var deferred = Q.defer();
        Database.findOne('users', {number:number}).then(
            function(user) {
                if (user) {
                    deferred.resolve(user.commitAmount);
                }
                else {
                    deferred.reject('user not found');
                }
            },
            function (error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    },

    setCommitAmountForUserToday: function(number, newAmount) {
        var deferred = Q.defer();
        Database.findOne('users', {number:number}).then(
            function(user) {
                if (user) {
                    user.commitAmount = newAmount;

                    Database.update('users', {number: user.number}, user).then(
                        function(success) {
                            deferred.resolve(success);
                        },
                        function(error) {
                            deferred.reject(error);
                        });
                }
                else {
                    deferred.reject('user not found');
                }
            },
            function (error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    },

    getTotalSavedAmountForUser: function(number) {
        var deferred = Q.defer();
        Database.findOne('users', {number:number}).then(
            function(user) {
                if (user) {
                    deferred.resolve(user.totalSaved);
                }
                else {
                    deferred.reject('user not found');
                }
            },
            function (error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    },

    setTotalSavedAmountForUser: function(number, newAmount) {
        var deferred = Q.defer();
        Database.findOne('users', {number:number}).then(
            function(user) {
                if (user) {
                    user.totalSaved = newAmount;

                    Database.update('users', {number: user.number}, user).then(
                        function(success) {
                            deferred.resolve(success);
                        },
                        function(error) {
                            deferred.reject(error);
                        });
                }
                else {
                    deferred.reject('user not found');
                }
            },
            function (error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    }
};
