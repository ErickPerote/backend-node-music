const token = require('../modules/token.module');
const knex = require('../database');

module.exports = function(roles) {
    return async function(req, res, next) {
        try {
            let decoded = await token.verify(req.headers.authorization.slice(7))
            let user = await knex("users").where({ id: decoded.id }).first()

            roles.indexOf(user.role)
            req.user = user

            if(roles.indexOf(user.role) >= 0) {
                next()
            } else {
                res.status(401).send("Permission Denied")
            }

        } catch(error) {
            return res.status(401).send("Invalid Token!")
        }
    }
}
