const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

const app = express();

app.use(bodyParser.json()); app.use(cors());

const userRoutes = require('./routes/users');
const medicalRoutes = require('./routes/medicals');
const commandRoutes = require('./routes/command');

app.use('/api/user', userRoutes);
app.use('/api/medical', medicalRoutes);
app.use('/api/command', commandRoutes);

const server = http.createServer(app);

const PORT = process.env.PORT || 8800;

server.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
});

module.exports = { app, server };