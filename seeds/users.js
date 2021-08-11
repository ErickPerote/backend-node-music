const hash = require('../src/modules/hash.module');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('passwords').del()
  await knex('users').insert([
    {
      id: 1,
      email: 'admin@gmail.com',
      full_name: 'admin',
      account_verified: true,
      role: 'admin'
    }
  ]);

  let password = hash.hashPassword("admin@123")
  await knex('passwords').insert([
    {
      id: 1,
      user_id: 1,
      salt: password.salt,
      hash: password.hash,
      iterations: password.iterations
    }
  ]);

};
