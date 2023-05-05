var http=require('http');
var fs=require('fs');


var server=http.createServer((req, res)=>{
    if(req.url==='/'){
    fs.readFile('index.html', (err, html)=>{
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write(html);
        res.end();
    })
    
    }
    else if(req.url==='/about'){
        fs.readFile('about.html', (err, html)=>{
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.write(html);
            res.end();
        })
    }
    else if(req.url==='/create' && req.method=="POST"){
        fs.appendFile("blogs.txt", "TEST", (err)=>{
            if(err){
                console.log(err);
            }else{
                res.statusCode=302;
                res.setHeader('Location', '/');
                res.end();
            }
        })
    }
    else if(req.url==='/create'){
        fs.readFile('create.html', (err, html)=>{
            res.write(html);
            res.end();
        });
    }
    
    else{
        fs.readFile('404.html', (err, html)=>{
            res.writeHead(404, {"Content-Type" : "text/html"})
            res.write(html)
            res.end()
        })
    }

});

server.listen(3002, ()=>{
    console.log('Server is working on port 3002');
})