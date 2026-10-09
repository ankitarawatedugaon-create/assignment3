const http = require("http");

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url.startsWith("/user")) {

        const url = new URL(req.url, "http://localhost:5000");

        const name = url.searchParams.get("name");

        res.end(`Hello ${name}`);
    }

    else {
        res.statusCode = 404;
        res.end("404 - Page Not Found");
    }

});

server.listen(8000, () => {
    console.log("Server started on port 8000");
});