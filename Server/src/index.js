const data = require("./utils/data");
var http = require("http");
var getCharById = require("./controllers/getCharById")
const PORT = 3001;
http.createServer((req,res)=>{
    console.log(`Server raised in port ${PORT}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.startsWith("/rickandmorty/character")){
        const id = parseInt(req.url.split("/").pop(), 10);
            return getCharById(res,id)
        }

    }).listen(PORT, "localhost")