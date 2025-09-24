const CryptoJS = require("crypto-js");

class Crypto {
  
    static encrypt(data, key) {
        return CryptoJS.AES.encrypt(data, key).toString();
    }
    static decrypt(data, key) {
        var resultDecryp = CryptoJS.AES.decrypt(data, key);
        return resultDecryp.toString(CryptoJS.enc.Utf8);
    }
}

module.exports = Crypto;