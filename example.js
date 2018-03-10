const Server = require('./dist/').default;

const port = 5000;
const server = new Server();

server.listen(port).then(() => {
  console.log(`⚡ Listening on *:${port}`);
});

server.on('connection', socket => {
  socket.send('message');
});
