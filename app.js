const express = require("express")
const app = express()
const path = require("path")
require('dotenv').config()
const PORT = process.env.PORT || 5000


app.use(express.static(path.join(__dirname, "public")))


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get("/register",(req,res) => {
    res.sendFile(path.join(__dirname,"./views/register.html"))
});

app.get("/login",(req,res) => {
    res.sendFile(path.join(__dirname,"./views/login.html"))
});


app.listen(PORT, ()=> console.log(`
El servidor esta levantado ${PORT}
http://localhost:${PORT}
`))