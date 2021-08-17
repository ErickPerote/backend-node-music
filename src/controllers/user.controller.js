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


exports.register = async function(req, res) {
    try {
        let handle_user = await knex('users').where({ email: req.body.email }).first()

        if(handle_user){
            return res.status(400).send("user already exists")
        }

        let password = hash.hashPassword(req.body.password)


        let user = await knex('users').insert({ email: req.body.email, full_name: req.body.full_name })


        await knex('passwords').insert({
            salt: password.salt,
            hash: password.hash,
            user_id: user[0],
            iterations: password.iterations
        });

        return res.status(200).send({
            token: token.sign(user[0])
        })

    } catch(error) {
        res.status(400).send("failed to create user")
    }
}