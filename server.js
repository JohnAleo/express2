const express= require("express")
const app= express();

app.use(express.json());
app.use(express.urlencoded({ extended:false}));

app.use("/add-new-caravan", (req, res,next) =>{
 res.send(
    `
    <h1>New Caravan</h1>
    <form action="/caravan" method="POST">
        <input type="text"  placeholder="caravan name"/> <br>
         <input type="text"  placeholder="price"/> <br>
        <input type="text" placeholder="ID"/> <br>
        <input type="submit" value="send"/>
    </form>
    `
 )   
})

app.use("/caravan", (req,res,next)=>{
console.log(req.body);
//res.send('<h1>Student List</h1>')
res.redirect("/")
})
app.use("/",(req,res,next) => {
    console.log("MidleWare...");
    res.send('<h1>Caravan</h1>'
    );
});

const PORT = process.env.PORT || 5007;
app.listen(PORT, ()=>{
    console.log("Server running on port:", PORT);
});