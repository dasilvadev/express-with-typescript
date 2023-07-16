import express from 'express';

const app = express();
const serverPort = 3000; 

app.use(express.json());

app.get('/', (req, res) => {
    return res.send("Hello Express!");
});

app.post('/products', (req, res) => {
    console.log(req.body);

    return res.status(201).send("New product created",);
});

app.all('/products/check', (req, res) => {
    console.log("Request method: %s", req.method);

    if (req.method === "GET") {
        return res.send("Read product!");
    }

    if (req.method === "POST") {
        return res.status(201).send("Product created!");
    }

    return res.status(404).send("Not found!");
})

app.listen(serverPort, () => {
    console.log(`Server running on port ${serverPort}.`);
});
