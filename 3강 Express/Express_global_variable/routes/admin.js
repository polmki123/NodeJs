const express = require('express');
const router = express.Router();
const nunjucks = require('nunjucks'); //view engine 추가 

function testMiddleWare( req, res, next ){
    console.log('첫번째 미들웨어');
    next();
} 

function testMiddleWare2( req, res, next ){
    console.log('두번째 미들웨어');
    next();
} 

// function loginRequred(req,res,next)
// {
//     if (로그인이 되어 있지 않으면 ){
//         res.redirect(로그인창으로)
//     }
//     else {
//         next();
//     }
// }

// 특정 url을 우회하는 용도로 사용한다. 
router.get('/', testMiddleWare, testMiddleWare2, (req, res) => {
    // if (로그인안되어 있으면 ) res.redirect();
    res.send('admin 이후 url');
})

router.get('/products', (req, res) => {
    // if (로그인안되어 있으면 ) res.redirect();
    res.render('admin/products.html', {
        message : '<h1> 태그가 출력됩니다.</h1>',
        online  : 'express'
    })
})

router.get('/products/wirte', (req,res) => 
{
    res.render('admin/write.html')
})

router.post('/products/wirte', (req,res) => {
    res.send(req.body);
})
module.exports = router;