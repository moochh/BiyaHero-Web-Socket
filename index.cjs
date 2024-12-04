const WebSocket = require('ws');

// Create a WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server is running on 8080');

// Listen for client connections
wss.on('connection', (ws) => {
	console.log('A new client connected.');

	// Send a welcome message to the client
	ws.send('Hello from the WebSocket server!');

	// Listen for messages from the client
	ws.on('message', (message) => {
		console.log(`Received message from client: ${message}`);

		// Optionally, send a response back to the client
		ws.send(`Server received: ${message}`);
	});

	// Handle client disconnection
	ws.on('close', () => {
		console.log('Client disconnected.');
	});
});
