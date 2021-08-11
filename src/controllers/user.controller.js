const knex = require('../database');
const hash = require('../modules/hash.module');
const token = require('../modules/token.module');

exports.auth = async function(req, res){
    try {
        let user = await knex('users').where({email: req.body.email}).join('passwords', 'users.id', 'passwords.user_id').first()

        if(!user){
            return res.status(401).send('email not found')
        }

        let valid = hash.isPasswordCorrect(user.hash, user.salt, user.iterations, req.body.password)

        if(!valid) {
            return res.status(401).send('password incorrect')
        }

        return res.status(200).send({
            token: token.sign(user.id),
            account_verified: user.account_verified,
            role: user.role
        })

    } catch (error) {
        res.status(500).send(error)
    }
};

