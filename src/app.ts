import express from 'express';

const app = express();
const serverPort = 3000; 

app.use(express.json());

app.get('/', (req, res) => {
    return res.send("Hello Express!");
});

app.post('/products', (req, res) => {
    console.log(req.body);

    return res.send("New product created");
});

app.listen(serverPort, () => {
    console.log(`Server running on port ${serverPort}.`);
});
