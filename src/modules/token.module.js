const jwt = require('jsonwebtoken');


let secret = "example"

exports.sign = function(id) {
    return jwt.sign({ id }, secret, { expiresIn: 3000 });
}

exports.verify = function(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, function(err, decoded) {
            if (err) {
                return reject(err)
            }
            resolve(decoded)
        });
    })
}




