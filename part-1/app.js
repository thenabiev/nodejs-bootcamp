let http=require("http");
let fs=require('fs');


let server = http.createServer((req, res)=>{
    let url=req.url;
    switch(url){
        case '/':
            fs.readFile("index.html", (error, html)=>{
                res.writeHead(200, {'Content-Type' : "text/html"});
                res.write(html);
                res.end()
            })
           
            break;
        case '/about':
            fs.readFile("about.html", (error, html)=>{
                res.writeHead(200, {'Content-Type' : "text/html"});
                res.write(html);
                res.end();
            })
            
            break;
        case '/contact':
            fs.readFile('contact.html', (error, html)=>{
                res.writeHead(200, {'Content-Type' : "text/html"});
                res.write(html);
                res.end();
            })
            
            break;
        default :
        fs.readFile('404.html', (error, html)=>{
            res.writeHead(404, {'Content-Type' : "text/html"});
            res.write(html);
            res.end()
        })
            
    }
})

let port=5000;

server.listen(port)
console.log("Server is active");