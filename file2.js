// Importing the express module
import express from 'express';

// Creating an instance of the express application
const app = express();

// Defining the port number for the application to listen on
const port = 3000;

// Importing JSON data (using 'assert { type: "json" }' for ES modules)
import data from './data/data.json' assert { type: 'json' };

// Middleware to parse JSON bodies
app.use(express.json());

// Setting up a route to display the JSON data
app.get('/books', (req, res) => {
    res.json(data);
});

// Starting the server and having it listen on the specified port (3000)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
