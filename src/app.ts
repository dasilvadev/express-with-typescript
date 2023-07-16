import express, { Request, Response } from 'express';

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

app.get('/interfaces', (req: Request, res: Response) => {
    return res.send("Using interfaces.");
});

app.get('/json', (req: Request, res: Response) => {
    return res.json({
        name: "Shirt",
        price: 30.0,
        color: "Blue",
        size: ["P", "M", "G"]
    });
});

app.get('/products/:id', (req: Request, res: Response) => {
    const id = req.params.id;

    if (id === "1") {
        const product = {
            id: 1,
            name: "Shirt",
            price: 10
        };

        return res.json(product);
    }

    return res.status(404).json({
        message: "Product not found."
    });
});

app.listen(serverPort, () => {
    console.log(`Server running on port ${serverPort}.`);
});
