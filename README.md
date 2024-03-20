# Marble Moonlight Middleware

Marble Moonlight Middleware is an elegant solution for enriching web application requests with additional processing layers, making your applications secure, insightful, and cross-origin resource sharing (CORS) compliant out of the box.

## Features

- Basic security with Helmet
- Logging with Morgan
- CORS enabled
- JSON body parsing
- Custom middleware functionality for additional request processing

## Getting Started

To use Marble Moonlight Middleware, first install the package using npm:

```bash
npm install marble-moonlight-middleware
```

Then, integrate it into your Express application:

```javascript
const express = require('express');
const marbleMoonlightMiddleware = require('marble-moonlight-middleware');

const app = express();

app.use(marbleMoonlightMiddleware);

app.get('/', (req, res) => {
res.send('Hello, world!');
});

app.listen(3000, () => {
console.log('Server is running on port 3000');
});
```

## License

This project is licensed under the MIT License.

## Contribution

Feel free to contribute to the project by submitting a pull request or opening an issue.
