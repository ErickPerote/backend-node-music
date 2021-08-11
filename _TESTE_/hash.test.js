const hash = require('../src/modules/hash.module');


// criptografa a senha do cliente
const pass = hash.hashPassword("secret")

// compara a senha do cliente com a criptografia
const result = hash.isPasswordCorrect(pass.hash, pass.salt, pass.iterations, "secret")

console.log(result)