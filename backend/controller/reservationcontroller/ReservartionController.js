const UserServiceRegister = require('../../services/registerResevation/RegisterReservation');
let Ultil = require('../../common/Ultil');

class UserControllerReservation {
    static async reservation(req, res) {
        let util = new Ultil(res);
        let body = req.body;
        let response = {
            status: 200,
            data: {},
            message: 'Reserva registrada correctamente',
            code: "OK"
        };
        if(!body || typeof body !== 'object') {
            util.saveData(response);
            return util.sendResponse();
        }
        try{
            let reservationOk = await UserServiceRegister.registerReservation(body);
            if(reservationOk) {
                response.code = "OK";
                response.message = "Reserva registrada correctamente";
                response.data = {
                    nombre: reservationOk.nombre,
                    telefono: reservationOk.telefono,
                    correo: reservationOk.correo,
                    habitacion: reservationOk.producto,
                    cantidad: reservationOk.cantidad,
                    total: reservationOk.total,
                    id: reservationOk.identificaro_empresa,
                    direccion: reservationOk.direccion
                    // reservationId: reservationOk.id,
                    // companyId: reservationOk.identificador_empresa,
                    // name: reservationOk.nombre,
                    // lastName: reservationOk.apellido,
                    // startDate: reservationOk.fechainicio,
                    // endDate: reservationOk.fechafin,
                    // room: reservationOk.habitacion,
                    // total: reservationOk.total,
                    // id: reservationOk.id
                }
            }else {
                response.code = "ERROR";
                response.message = "Error al registrar la reserva";
            }

        } catch (error) {
            console.error('Error al registrar la reserva:', error);
            response.code = "ERROR";
            response.message = "Error inesperado al registrar la reserva";
        }
        util.saveData(response);
        return util.sendResponse();
    }
}
module.exports = UserControllerReservation;
