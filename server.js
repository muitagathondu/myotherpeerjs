const express = require('express');
const { PeerServer } = require('peer');

const app = express();
const PORT = process.env.PORT || 9001;

// Create the PeerJS server
const peerServer = PeerServer({
  port: PORT,
  path: '/myapp',
  allow_discovery: true,
});

app.use('/peerjs', peerServer);

app.get('/', (req, res) => {
  res.send('PeerJS Server is running!');
});

app.listen(PORT, () => {
  console.log(`PeerJS Server running at http://localhost:${PORT}`);
});
