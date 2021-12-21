let express = require('express');
let router = express.Router();
let roomController = require('./controllers/roomController');
let appartController = require('./controllers/appartController');

router.get('/',roomController.displayForm);
router.get('/appart',appartController.displayAppart);
router.post('/createroom',roomController.createRoom);

module.exports = router;