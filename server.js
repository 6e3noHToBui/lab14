const http = require('http');
const author = 'Artur Moroz | 93692';
const server = http.createServer((req, res) => {
  console.log(`[${new Date()}] ${req.method} ${req.url} from ${req.socket.remoteAddress}`);

  res.writeHead(200, {'Content-Type': 'text/html'});
  const ip = req.socket.remoteAddress;
  const now = new Date();
  const localtime = now.toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' });
  res.write(`<h1>Adres IP Artur Moroza: ${ip}</h1>`);
  res.write(`<p>Data i godzina: ${localtime}</p>`);
  res.end();
});

const port = 3000;
server.listen(port, () => {
    console.log(`Serwer uruchomiony: ${new Date()}`);
    console.log(`Autor: ${author}`);
    console.log(`Nasłuchiwanie na porcie ${port}`);

    server.on('error', (err) => {
        console.error(`Błąd serwera: ${err}`);
  });
});
