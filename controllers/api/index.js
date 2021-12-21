const router = require('express').Router();
const homepageRoutes = require('./homepageRoutes');

router.use('/homepage', homepageRoutes);

module.exports = router;
