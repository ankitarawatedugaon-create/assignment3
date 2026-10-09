const http = require("http");

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url.startsWith("/user")) {

        const url = new URL(req.url, "http://localhost:5000");

        const name = url.searchParams.get("name");
        const age = url.searchParams.get("age");

        const user = {
            name: name,
            age: age
        };

        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify(user));
    }

    else {
        res.statusCode = 404;
        res.end("404 - Page Not Found");
    }

});

server.listen(8000, () => {
    console.log("Server started on port 8000");
});