const express = require('express');
const router = express.Router();

// 특정 url을 우회하는 용도로 사용한다. 
router.get('/', (req, res) => {
    res.send('admin 이후 url');
})

router.get('/products', (req, res) => {
    res.send('admin products 이후 url');
})

module.exports = router;