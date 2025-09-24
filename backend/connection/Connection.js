const Pool= require('pg').Pool;
const Crypto = require('../crypto/Crypto');
const Cryptostring = require('./encrypt-connection');
const connectionString = Cryptostring.encryptString();
const keyEncrypt = "reservasakjsdlajslfjalsjdlaskjdljaslj2025";

function Conexion () {
    this.pool=null;

    this.start = function () {
        let resultDecryp = Crypto.decrypt(connectionString, keyEncrypt);
        let jsonResult = JSON.parse(resultDecryp);
        this.pool = new Pool({
            connectionLimit: 100,
            user: jsonResult.user,
            host: jsonResult.host,
            database: "postgres",
            password: jsonResult.password,
            port: 6543,
        });

        console.log("Conexión a la base de datos establecida correctamente.");
    }
    this.getConnection = function () {
        if (this.pool == null) {
            this.start();
        }
        return this.pool;
    }
}

module.exports = new Conexion();