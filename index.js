import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`a GET request with / route on port ${PORT}`);
});

app.post('/newItem', (req, res) => {
    res.send(`a POST request with /newItem route on port ${PORT}`);
});

app.put('/item', (req, res) => {
    res.send(`a PUT request with /item route on port ${PORT}`);
});

app.delete('/item', (req, res) => {
    res.send(`a DELETE request with /item route on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(data);
});
