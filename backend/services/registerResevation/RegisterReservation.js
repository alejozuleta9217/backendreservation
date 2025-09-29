const pool = require('../../connection/Connection');

class UserServiceRegister {

    static async registerReservation(reservation) {
        pool.start();
        console.log("Data", reservation);
        return new Promise((resolve, reject) => {
            pool.getConnection().query(
                // 'INSERT INTO public.reservation_cun (id, nombre, telefono, correo, producto, cantidad, fechainicio, fechafin, total) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                'INSERT INTO public.reservation_cun (id, nombre, telefono, correo, producto, cantidad, total, identificaro_empresa, direccion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
                [
                    
                    reservation.identificador_empresa,                    
                    reservation.nombre,
                    reservation.telefono, 
                    reservation.correo, 
                    reservation.habitacion, 
                    reservation.cantidad, 
                    reservation.total,  
                    reservation.id,         
                    reservation.direccion       
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

    static async registerTarjeta(reservation) {
        pool.start();
        console.log("Data", reservation);
        return new Promise((resolve, reject) => {
            pool.getConnection().query(
                'INSERT INTO public.reservation_ciberseguridad (id, nombre, telefono, correo, habitacion, fechainicio, fechafin, total, identificador_hotel) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
                [
                    
                    reservation.id,                    
                    reservation.nombre,
                    reservation.telefono, 
                    reservation.correo, 
                    reservation.habitacion, 
                    reservation.fechaInicio, 
                    reservation.fechaFin, 
                    reservation.total,  
                    reservation.identificador_empresa,        
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

    static async registerUser(reservation) {
        const getNumber = () => Math.floor(Math.random() * 1000000) + 1;
        pool.start();
        console.log("Data", reservation);
        return new Promise((resolve, reject) => {
            pool.getConnection().query(
                'INSERT INTO public.user_reservation (id_user, nameuser, pass) VALUES ($1, $2, $3) RETURNING *',
                [
                    getNumber(),                    
                    reservation.email,
                    reservation.password    
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

    static async Userlogin(reservation) {
    pool.start();
    console.log("Data", reservation);

    return new Promise((resolve, reject) => {
        pool.getConnection().query(
            'SELECT * FROM public.user_reservation WHERE nameuser = $1 AND pass = $2',
            [reservation.email, reservation.password],
            (error, results) => {
                if (error) {
                    console.error('Error al consultar usuario:', error);
                    return reject(error);
                }

                if (results.rows.length > 0) {
                    console.log('Usuario encontrado:', results.rows[0]);
                    return resolve(results.rows[0]); // Devuelves el usuario
                } else {
                    console.log('No se encontraron resultados');
                    return resolve(null); // Devuelves null
                }
            }
        );
    });
}
}

module.exports = UserServiceRegister;