const express = require('express');
const router = express.Router();

const ReservationController = require('../controller/reservationcontroller/ReservartionController');


router.post('/register', ReservationController.reservation);

module.exports = router;