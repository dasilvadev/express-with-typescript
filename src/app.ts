import express from 'express';

const app = express();
const serverPort = 3000; 

app.get('/', (req, res) => {
    return res.send("Hello Express!");
});

app.listen(serverPort, () => {
    console.log(`Server running on port ${serverPort}`);
});
