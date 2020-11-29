const http = require('http'); //내장 모듈 

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' }); //200은 응답성공 
    response.write('Hello Server');
    response.end();
}).listen(3000); // 포트가 3000번 인걸로 띄어 달라