const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Server is running");
});

server.listen(8000, () => {
    console.log("Server started on port 8000");
});