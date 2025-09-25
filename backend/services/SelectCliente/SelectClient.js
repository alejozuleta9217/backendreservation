const pool = require('../../connection/Connection');

class UserServiceClient {

    static async SelectReservation(reservation) {
        pool.start();
        console.log("Dataconsulta", reservation.id);
        return new Promise((resolve, reject) => {
            pool.getConnection().query(
                'SELECT * FROM public.reservation_cun WHERE id = $1',
                [                 
                    reservation.id,                
                ],
                (error, results) => {
                    if (error) {
                        console.error('Error al cosultar los clientes:', error);
                        return reject(error);
                    } 
                    if(results.rows.length > 0) {
                        console.log('Reserva registrada:', results.rows);
                        return resolve(results.rows);
                    }else {
                        console.log('No se encontraron resultados');
                        return resolve(null);
                    }                       
                    
                }
            )
        })

    }
}

module.exports = UserServiceClient;