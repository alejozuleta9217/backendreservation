const express = require('express');
const router = express.Router();

const ReservationController = require('../controller/reservationcontroller/ReservartionController');
const ReservationClient = require('../controller/reservationcontroller/SelectClientController');


router.post('/register', ReservationController.reservation);
router.post('/select', ReservationClient.reservation);

module.exports = router;