const data = require("./utils/data");
var http = require("http");
const PORT = 3001;
http.createServer((req,res)=>{
    console.log(`Server raised in port ${PORT}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.startsWith("/rickandmorty/character")){
        const id = parseInt(req.url.split("/").pop(), 10);
         var personajeEnData = data.find(personaje => personaje.id === id)
        if (personajeEnData) {
            res.writeHead(200, {"Content-Type":"application/json"})
            res.end(JSON.stringify(personajeEnData))
        }

    }
}).listen(PORT, "localhost")