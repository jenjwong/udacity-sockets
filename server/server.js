const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(path.resolve(__dirname, '..', 'client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client/build', 'index.html'));
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  // TODO: implement typing... UI
  socket.on('typing', (msg) => {
    io.emit('typing', msg);
  });
});

const PORT = process.env.PORT || 3001;

http.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
