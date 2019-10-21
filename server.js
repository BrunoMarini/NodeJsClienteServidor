var http = require('http');
var fs = require('fs');

<script type="text/javascript" charset="utf-8" src="Pessoa.js"></script>

http.createServer(function (req, res) {

    //REQUEST DE PAGINAS
    if (req.url === '/') {
        fs.readFile('home.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);

            res.end();
        });
    } else if (req.url === '/login.html') {
        fs.readFile('login.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);

            res.end();
        });
    } else if (req.url === '/cadastro.html') {
        fs.readFile('cadastro.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);

            res.end();
        });
    //REQUEST FUNCOES
    } else if (req.url === '/cadastrar') {
        console.log("IUASFHAOUISDGAOSUI");
    } else {
        res.write('Arquivo não existe!');
        res.end();
    }
    

}).listen(8080);