
var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) { 

    /**
     *  < basic >
     *  req : request의 약자, 사용자의 요청 값이 담겨져 있다.
     *  res : response의 약자, 사용자에게 서비스를 제공하는 API가 있다.
     *  next : 다른 라우터에게 임무를 하달한다.
     */

     console.log("Hello world");
});

router.get('/basic', function (req, res, next) {

    /**
     *  < basic >
     *  req : request의 약자, 사용자의 요청 값이 담겨져 있다.
     *  res : response의 약자, 사용자에게 서비스를 제공하는 API가 있다.
     *  next : 다른 라우터에게 임무를 하달한다.
     *  write : String형태의 데이터 전송한다.
     */

    res.write("Hello world");
    res.end();
});

router.get('/next', function (req, res, next) {
    /**
     *  < basic >
     *  next: 다음 function을 수행 시킬수가 있다.
     */

    var isNext = true

    if(isNext) {
        next();
    } else {
        res.end();
    }

}, function(req, res, next) {

    console.log("isNext is true");
    res.end();
});

router.get('/webapp', function (req, res, next) {
    
    /**
     *  < basic >
     *  jade preprocesser를 이용한 view제공
     *  html은 파일이고 서버를 이용해서 웹브라우져로 파일을 전송해야한다.
     *  따라서 "http://localhost:7777/sample.html" 을 하면 된다.
     *  jade를 쓰고 싶지 않다면 app.js에서 view엔진을 html로 바꾸자
     */

    res.render('todo', { title: 'using jade' });
});

module.exports = router; // export router