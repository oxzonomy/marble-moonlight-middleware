const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// MarbleMoonlightMiddleware: Enhances web requests with security and logging
function marbleMoonlightMiddleware(req, res, next) {
  // Example: Add a custom header for demonstration purposes
  res.setHeader('X-Marble-Moonlight', 'Magic');
  next();
}

const app = express();

app.use(helmet()); // Basic security
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies
app.use(morgan('tiny')); // Logging
app.use(marbleMoonlightMiddleware); // Custom Middleware

app.get('/', (req, res) => {
  res.send('Welcome to Marble Moonlight Middleware Enhanced Application!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
