const http = require("http");

const server = http.createServer((req, res) => {

    if (req.method === "GET") {
        res.end("GET request received");
    }

    else {
        res.statusCode = 405;
        res.end("Method Not Allowed");
    }

});

server.listen(8000, () => {
    console.log("Server started on port 8000");
});