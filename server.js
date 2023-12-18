const expres =require("express");
const app = express();
const mongoose =require("mongoose");
const nodemon  = required("nodemon");

app.get('/', (req , res) =>{

    res.send("hello world")
})

app.get('/blog', (req , res) =>{
    res.send("hellow blog, my name is Dennis")
}
)
app.listen(3000,()=>{
    console.log("node API is running on the port 3000")
})
mongoose.connect("mongodb+srv://ohenekwadwodouglas:<password>@cluster0.7niapmi.mongodb.net/")
.then( ()=>{
    console.log("connected to mongoDB")
}).catch((error) =>{
    console.log(error)
}
)





 

     
