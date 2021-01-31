const express = require('express');

const admin = require('./routes/admin');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello express');
});

app.use( '/admin', admin); 

app.get('/fastcampus', (req, res) => {
    res.send('fastcampus get');
});

app.listen(port, () => {
    console.log('Express listening on port', port);
});
//이렇게 귀찮게 올렸다가 내렸다가 하는것은 불편함으로 nodemon을 사용한다.