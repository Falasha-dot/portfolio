const express= require("express");
const app=express();
const PORT = 3000;
app.get("/", (rep, res)=>{
    res.send("Mon serveur fonctione!");
});
app.listen(PORT, ()=>{
    console.log(`serveur démaré sur http://locahost:${PORT
}`);
});