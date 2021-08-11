var crypto = require('crypto');


exports.hashPassword = function(password) {
    var salt = crypto.randomBytes(128).toString('base64');
    var iterations = 10000;
    var hash = crypto.pbkdf2Sync(password, salt, iterations, 64, 'sha512');
    return {
        salt: salt,
        hash: hash.toString('hex'),
        iterations: iterations
    };
}

exports.isPasswordCorrect = function(savedHash, savedSalt, savedIterations, passwordAttempt) {
    return savedHash == crypto.pbkdf2Sync(passwordAttempt, savedSalt, savedIterations, 64, 'sha512').toString('hex');
}