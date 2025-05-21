require("dotenv").config();
const express=require('express')
const cors=require('cors');
const app=express();
const connectDB=require("../server/utils/db")
const router=require('../server/router/auth-router')
const contactRoute=require('../server/router/contact-router')
const errorMiddleware=require("./middlewares/error-middleware")
// app.get('/',(req,res)=>{
//     res.status(200).send("HELLO WELcome gus");
// })

// app.get('/register',(req,res)=>{
//     res.status(200).send("HELLO WELcome REgister");
// })
const corsOptions={
    origin: "http://localhost:5173",
    method: "GET, POST,DELETE ,PUT,PATH,HEAD",
    Credentials:true,
}
app.use(cors(corsOptions));
app.use(express.json(u))
app.use("/api/auth",router);
app.use("/api/form",contactRoute)
app.use(errorMiddleware)
const PORT=3000;


connectDB().then(
    app.listen(PORT,()=>{
        console.log("WE are cfallin from port 3000")
    })
)

