import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    // get data first (Ex: from a MongoDB. Here it's from /data/data.json)
    res.json(data);
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
