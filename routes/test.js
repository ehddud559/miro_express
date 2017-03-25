
var express = require('express');

var router = express.Router();

router.get('/sort', function(req, res, next) { 

    // TODO : sort를 구현해서 해당 값을 사용자에게 전송해보자
    // < tip > temp.sort(), write, end
    var needSortData = [5, 1, 8, 3, 9];

});

module.exports = router; // export router