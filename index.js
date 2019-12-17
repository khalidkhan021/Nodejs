const exprees =require('express');
const app = exprees();

app.get('/' ,(req,res)=>{
    res.send('Hello world')
});
app.get('/api/courses',(req,res)=>{
    res.send([1,2,3])
})

const port =process.env.port||3000
 app.listen(port,()=>{console.log("console form por 3000")})