var express = require('express');
var router = express.Router();
let reqId = 1;
let intervalSession = {};
/* GET home page. */
router.get('/', (req, res, next) => {
  const interval = 1000;
  let response= {
    id: reqId,
    message: 'Hello, World!',
  };
  intervalSession[reqId] = setInterval(() => {
    response['timestamp'] = new Date().toISOString()
    console.log(response);
    }, interval);

    reqId++;
});
router.get('/stop', (req, res, next) => {
  clearInterval(intervalSession[reqId]);
  reqId--;
  console.log('Stopped');
});
module.exports = router;
