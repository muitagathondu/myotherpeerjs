const express = require('express');
const { PeerServer } = require('peer');

const app = express();
const PORT = process.env.PORT || 9001;

// Create the PeerServer instance without the `port` option
const peerServer = PeerServer({

    path: '/myapp',
    key: process.env.PEERJS_KEY,
    allow_discovery: true,
  });

app.use('/myapp', peerServer);

app.get('/', (req, res) => {
  res.send('PeerJS Server is running!');
});

app.listen(PORT, () => {
  console.log(`PeerJS Server running at http://localhost:${PORT}`);
});
