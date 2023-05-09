const express=require('express');

const app=express();

let num;


app.use('/about',(req, res)=>{
    res.send('About page');
});

app.use(`/blogs/${num}`, (req, res)=>{
    res.send(`Blog ${num} details`)
})

app.use('/blogs', (req, res)=>{
    res.send('Blogs page')
})

app.use('/',(req, res)=>{
    res.send('Home page')
});
app.listen(3003, ()=>{ 

    console.log("Server is running on port 3003");
})