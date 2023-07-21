const fs = require("fs");
const express = require("express");
const app = express();
const http = require("http");
// const port = 5000;
const url = require("url");
const parse = require("body-parser");
// require("rout");




// http.createServer((req,res)=>{ 
//     if(req.url=="/"){
//         fs.readFile("data.json", "utf-8",(err,data)=>{
//             const b = JSON.parse(data)
//             console.log(b[0].roll)
//             res.end(data)
//         })
//     }



// }).listen(port)
// const app = express();
// const path = require("path")
// const static = path.join(__dirname,"./public")
// console.log(static)
//  app.render()

// app.get("/",(req,resp)=>{
//     const filePath = "../static./public/index.html"

//     fs.readFile(filePath,'utf-8',(err,data)=>{
//         console.log(data)
//         resp.end(data)
//     });
// });
// app.use(express.static(static))
// app.listen(port,()=>{
//     console.log(`On: ${port}`)
// })
// console.log(__dirname)
app.use(parse.urlencoded())
app.use(parse.json(true))

app.get('/',(req,res)=>{
    fs.readFile('frm.html',"utf-8",(err,data)=>{
        res.end(data);
    })

})
app.post('/submit',(req,res)=>{
    console.log(req.body)
    res.end("submit")
})

app.listen(5000,()=>{
    console.log("working")
});


