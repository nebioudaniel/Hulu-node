javascript
const express = require('express');
const securityMiddleware = require('./security');

const app = express();

// Use security middleware
app.use(securityMiddleware);

// Define your routes and other middleware...
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
