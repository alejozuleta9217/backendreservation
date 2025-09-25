const UserServiceRegisterClient = require("../../services/SelectCliente/SelectClient");
let Ultil = require("../../common/Ultil");

class UserControllerReservationClient {
  static async reservation(req, res) {
    console.log("entre");
    let util = new Ultil(res);
    let body = req.body;
    let response = {
      status: 200,
      data: {},
      message: "Reserva registrada correctamente",
      code: "OK",
    };
    if (!body || typeof body !== "object") {
      util.saveData(response);
      return util.sendResponse();
    }
    try {
      let reservationOk = await UserServiceRegisterClient.SelectReservation(
        body
      );
      if (reservationOk) {
        response.code = "OK";
        response.message = "Reserva registrada correctamente";
        response.data = reservationOk.map((item) => ({
          id: item.id,
          nombre: item.nombre,
          telefono: item.telefono,
          correo: item.correo,
          habitacion: item.producto,
          cantidad: item.cantidad,
          total: item.total,
          identificador_empresa: item.identificaro_empresa, // corrige si está mal escrito
          direccion: item.direccion,
        }));
        console.log("response123", response.data);
      } else {
        response.code = "ERROR";
        response.message = "Error al registrar la reserva";
      }
    } catch (error) {
      console.error("Error al registrar la reserva:", error);
      response.code = "ERROR";
      response.message = "Error inesperado al registrar la reserva";
    }
    util.saveData(response);
    return util.sendResponse();
  }
}
module.exports = UserControllerReservationClient;
