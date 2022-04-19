const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;


server.use('/static', express.static(__dirname + '/public'));
server.listen(PORT);
console.log(`Server started! At http://localhost:${PORT}/static`);