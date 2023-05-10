const express=require('express');
const path=require('path')

const app=express();

// Static files middleware
// #######################
app.use('/libs', express.static(
    path.join(__dirname ,'node_modules')
))
app.use('/static', express.static(
    path.join(__dirname,'public')
))
// #######################


app.use('/about',(req, res)=>{
    res.send('About page');
});

app.use(`/blogs/:blogId`, (req, res)=>{

    res.sendFile(path.join(__dirname, 'views/users', 'blog-details.html'))

    // let blogId=req.params.blogId
    // res.send(`Blog ${blogId} details`)
})

app.use('/blogs', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/users', 'blogs.html'))
})

app.use('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'views/users', 'index.html'))
});
app.listen(3003, ()=>{ 

    console.log("Server is running on port 3003");
})