const router  = require('express').Router();

router.get('/all',require('./getAll'));
router.post('/create',require('./post'));

module.exports = router;