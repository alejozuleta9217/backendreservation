const express = require('express');
const router = express.Router();

const ReservationController = require('../controller/reservationcontroller/ReservartionController');
const ReservationClient = require('../controller/reservationcontroller/SelectClientController');


router.post('/register', ReservationController.reservation);
router.post('/registercard', ReservationController.reservationTarjeta);
router.post('/registeruser', ReservationController.reservationUser);
router.post('/login', ReservationController.UserLogin);
router.post('/select', ReservationClient.reservation);

module.exports = router;