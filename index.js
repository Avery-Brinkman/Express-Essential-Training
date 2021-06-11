import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import data from './data/data.json';

const app = express();
const PORT = 3000;

// This is for the public folder on path /
app.use(express.static('public'));

// This is for the images folder on path /images
app.use('/images', express.static('images'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.get('/', (req, res) => {
    // get data first (Ex: from a MongoDB. Here it's from /data/data.json)
    res.json(data);
});

app.get('/item/:id', (req, res, next) => {
    // This is the middleware that pulls the data
    console.log(req.params.id);
    const user = Number(req.params.id);
    console.log(user);
    console.log(data[user]);
    // Middleware that uses the req object
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    // Everything above is middleware
    res.send(data[user]);
    next();
});

app.post('/newItem', (req, res) => {
    res.send(`a POST request with /newItem route on port ${PORT}`);
});

app.get('/item', (req, res) => {
    res.end();
    // res.send(`a PUT request with /item route on port ${PORT}`);
}).delete((req, res) => {
    res.send(`a DELETE request with /item route on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // console.log(data);
});
