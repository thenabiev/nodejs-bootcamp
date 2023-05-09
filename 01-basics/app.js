var http=require('http');
const routes=require('./routes')



var server=http.createServer(routes);


server.listen(3002, ()=>{
    console.log('Server is working on port 3002');
})
