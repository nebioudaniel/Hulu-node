// app.js

const express = require('express');
const securityMiddleware = require('./security');

const app = express();

// Use security middleware
app.use(securityMiddleware);

// Define your routes and other middleware...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
