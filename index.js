const http = require("http");
const cowsay = require("cowsay");
const port = 8080;

const server = http.createServer((_, res) => {
  res.statusCode = 200;
  const message = cowsay.say({
    text: "Hello World!",
    r: true,
  });
  console.log(message);
  res.end(message);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
