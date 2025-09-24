class Ultil{

    constructor(res) {
        this.res = res;
    }

    saveData({status, data, message, code}) {
        this.status = status;
        this.data = data;
        this.message = message;
        this.code = code;
    }

    sendResponse(){
        const result = {
            status: this.status,
            data: this.data,
            message: this.message,
            code: this.code
        };
        return this.res.status(this.status).json(result);
    }

}
module.exports = Ultil;