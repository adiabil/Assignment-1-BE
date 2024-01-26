const http = require("http");
const router =require("./router");
const port = 8080;

const server = http.createServer((req, res) => {
  router(req,res);
 
});


server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

