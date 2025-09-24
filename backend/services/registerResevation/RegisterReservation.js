const pool = require('../../connection/Connection');

class UserServiceRegister {

    static async registerReservation(reservation) {
        pool.start();
        console.log("Data", reservation);
        return new Promise((resolve, reject) => {
            pool.getConnection().query(
                // 'INSERT INTO public.reservation_cun (id, nombre, telefono, correo, producto, cantidad, fechainicio, fechafin, total) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                'INSERT INTO public.reservation_cun (id, nombre, telefono, correo, producto, cantidad, total, identificaro_empresa) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
                [
                    
                    reservation.identificador_empresa,                    
                    reservation.nombre,
                    reservation.telefono, 
                    reservation.correo, 
                    reservation.habitacion, 
                    reservation.cantidad, 
                    reservation.total,  
                    reservation.id,                
                ],
                (error, results) => {
                    if (error) {
                        console.error('Error al registrar la reserva:', error);
                        return reject(error);
                    } 
                    if(results.rows.length > 0) {
                        console.log('Reserva registrada:', results.rows[0]);
                        return resolve(results.rows[0]);
                    }else {
                        console.log('No se encontraron resultados');
                        return resolve(null);
                    }                       
                    
                }
            )
        })

    }
}

module.exports = UserServiceRegister;