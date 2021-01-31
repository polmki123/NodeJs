const express = require('express');
const nunjucks = require('nunjucks'); //view engine 추가 
const logger = require('morgan');
const admin = require('./routes/admin');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape: true , //외부 공격으로 부터 안전하게 만듬, 태그 기능 비활성화
    // autoescape: false , //태그를 그대로 보여주게 만듬 
    express : app
} );

// 미들웨어 셋팅 
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('hello express');
});

function vipMiddleware(req, res, next)
{
    console.log("최우선 미들웨어 ")
    next();
}
app.use( '/admin', vipMiddleware,  admin); 

app.get('/fastcampus', (req, res) => {
    res.send('fastcampus get');
});

app.listen(port, () => {
    console.log('Express listening on port', port);
});
//이렇게 귀찮게 올렸다가 내렸다가 하는것은 불편함으로 nodemon을 사용한다.