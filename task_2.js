const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Welcome to Node.js Server");
    }

});

server.listen(8000, () => {
    console.log("Server started on port 8000");
});