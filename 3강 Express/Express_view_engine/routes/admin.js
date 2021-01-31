const express = require('express');
const router = express.Router();
const nunjucks = require('nunjucks'); //view engine 추가 


// 특정 url을 우회하는 용도로 사용한다. 
router.get('/', (req, res) => {
    res.send('admin 이후 url');
})

router.get('/products', (req, res) => {
    res.render('admin/products.html', {
        message : '<h1> 태그가 출력됩니다.</h1>',
        online  : 'express'
    })
})

module.exports = router;