const exprees =require('express');
const app = exprees();

app.get('/' ,(req,res)=>{
    res.send('Hello world')
});
app.get('/api/courses',(req,res)=>{
    res.send([1,2,3])
})
app.get('/api/courses/:years/:month',(req,res)=>{
    console.log("Request***",process.env.port)
    res.send(req.params)
})
const port =process.env.port||3000
 app.listen(port,()=>{console.log("console form port 3000")})