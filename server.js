const socket = new WebSocket('wss://https://myotherpeerjs.onrender.com/myapp');

socket.onopen = function(event) {
  console.log("WebSocket is open now.");
};

socket.onclose = function(event) {
  console.log("WebSocket is closed now.");
};

socket.onerror = function(error) {
  console.log("WebSocket error:", error);
};

socket.onmessage = function(event) {
  console.log("Received message:", event.data);
};
