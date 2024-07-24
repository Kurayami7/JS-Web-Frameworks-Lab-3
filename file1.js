// Importing the express module via ES module
import express from 'express';

// Creating an instance of the express application
const app = express();

// Defining the port number for the application to listen on
const port = 3000;

// Setting up a route for the home page that sends group names as HTML
app.get('/', (req, res) => {
    // res.send('<h1>Group 16: Mohammad Ibn Bapu, Benjamin Ibn Innocent and Areaf Ibn Abdur Rashid</h1>');
    res.send('<h1>Group 16: Mohammad Bapu, Benjamin Innocent and Areaf Abdur Rashid</h1>');
});

// Starting the server and having it listen on the specified port (3000 from above, basically)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
