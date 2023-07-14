const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path")
const static = path.join(__dirname,"./public")
console.log(static)
const port = 5050;


// app.get("/",(req,resp)=>{
//     const filePath = "../static./public/index.html"

//     fs.readFile(filePath,'utf-8',(err,data)=>{
//         console.log(data)
//         resp.end(data)
//     });
// });
app.use(express.static(static))
app.listen(port,()=>{
    console.log(`On: ${port}`)
})
// console.log(__dirname)