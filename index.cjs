const WebSocket = require('ws');

const port = process.env.PORT || 3000;

// Create a WebSocket server on port 8080
const wss = new WebSocket.Server({ port: port });

console.log(`WebSocket server is running on ${port}`);

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
