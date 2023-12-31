const express = require('express');
const router = express.Router()
const checkRole = require('../middleware/auth');
const bookingController = require('../controllers/booking.controller');
const flightController = require('../controllers/flight.controller');
const responseValues = {
    seatdetail: 0,
}

// Default Booking Page
router.get('/booking', checkRole('user'), function (req, res) {
    const flightid = req.body;
    try {
        //const flightid = flight_id;
        bookingController.run(flightid, res, req.cookies.userRole);
    } catch (err) {
        console.log(err);
        res.send("500");
    }
})

router.post('/booking/getJourneyByID', function (req, res) {
    const Journey_ID = req.body.Journey_ID;
    console.log("Journey_ID", Journey_ID)

    try {
        console.log(req.body)
        //const flightid = flight_id;
        bookingController.getFlights(Journey_ID, res, req.cookies);
    } catch (err) {
        console.log(err);
        res.send("500");
    }
})

router.post('/booking/getPodsbyJourney', function (req, res) {
    const Journey_ID = req.body.Journey_ID;

    try {
        console.log(req.body)
        //const flightid = flight_id;
        bookingController.getPods(Journey_ID, res, req.cookies);
    } catch (err) {
        console.log(err);
        res.send("500");
    }
})


router.post('/booking/getnextflights', function (req, res) {
    try {
        flightController.getNextFlights(req.body, res, req.cookies);

    } catch (err) {
        console.log(err);
        res.send("500");
    }
})

router.post('/booking/createbooking', bookingController.createbooking);

router.get('/booking/getlocations', function (req, res) {
    try {
        bookingController.getlocations(req, res);
    } catch (err) {
        console.log(err);
        res.send("500");
    }
})

router.delete('/booking/deleteBookings', function (req, res) {
    try {
        bookingController.deleteBookings(req, res);
    } catch (err) {
        console.log(err);
        res.send("500");
    }
})


module.exports = router;