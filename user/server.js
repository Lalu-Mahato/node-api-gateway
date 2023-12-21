const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/user', (req, res) => {
    return res.send({ message: 'Hello from User' });
});

const server = http.createServer(app);
server.listen(port, () => console.log(`Server listening on port:${port}`));
