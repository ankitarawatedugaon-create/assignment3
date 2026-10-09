const http = require("http");

const server = http.createServer((req, res) => {

    if (req.method === "POST" && req.url === "/users") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            const user = JSON.parse(body);

            console.log(user);

            const response = {
                message: "User received successfully",
                user: user
            };

            res.setHeader("Content-Type", "application/json");

            res.end(JSON.stringify(response));
        });
    }

    else {
        res.statusCode = 404;
        res.end("404 - Page Not Found");
    }

});

server.listen(8000, () => {
    console.log("Server started on port 8000");
});