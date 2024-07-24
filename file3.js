// Importing the express module (ES) and json 
import express from 'express';
import { json } from 'express';

// Creating an instance of the express application
const app = express();

// Defining the port number for the application to listen on
const port = 3000;

// Parsing incoming request bodies in JSON format
app.use(json());

// Loading the JSON data from the data file
import booksData from './data/data.json' assert { type: 'json' };

// Converting the JSON data to a modifiable array
let books = [...booksData];

// Setting up a route to create a new book entry (POST)
app.post('/books', (req, res) => {
    const newEntry = req.body;
    books.push(newEntry);
    res.status(201).json(newEntry);
});

// Setting up a route to update an existing book entry (PUT)
app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, publishedYear, genres, description } = req.query;

    // Finding the book to update
    const bookIndex = books.findIndex(book => book.id === parseInt(id));
    if (bookIndex !== -1) {
        // Updating the book properties
        books[bookIndex] = {
            ...books[bookIndex],
            title: title || books[bookIndex].title,
            author: author || books[bookIndex].author,
            publishedYear: publishedYear ? parseInt(publishedYear) : books[bookIndex].publishedYear,
            genres: genres ? genres.split(',').map(g => g.trim()) : books[bookIndex].genres,
            description: description || books[bookIndex].description,
        };

        res.json(books[bookIndex]);
    } else {
        res.status(404).send('Book not found');
    }
});

// Setting up a route to delete a book entry (DELETE)
app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    books = books.filter(book => book.id !== parseInt(id));
    res.status(204).end();
});

// Starting the server and having it listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
