const http=require('http');
const fs=require('fs');

const server=http.createServer((req, res)=>{
    let url=req.url;

    switch(url){
        case "/" :
            fs.readFile('index.html', (err, html)=>{
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(html);
                res.end();
            })
            
            break;
        
        case "/contact" :
            fs.readFile("contact.html", (err, html)=>{
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(html);
                res.end();
            })
           
            break;
        
        default :
        fs.readFile("404.html", (err, html)=>{
            res.writeHead(404, {"Content-Type": "text/html"});
            res.write(html)
            res.end();
        })
        
    }

})

const port = 3002;


server.listen(port, ()=>{
    console.log(`Server is listening port: ${port}`);
})