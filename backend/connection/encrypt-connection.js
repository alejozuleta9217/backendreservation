const Crypto = require('../crypto/Crypto');
require('dotenv').config();

class Cryptostring {
    static encryptString () {
        const txt = process.env.CADENA;

        const keyEncrypt = "reservasakjsdlajslfjalsjdlaskjdljaslj2025";

        let connectionString = Crypto.encrypt(txt, keyEncrypt);
        return connectionString;
    } 

}

module.exports = Cryptostring;