const express = require ("express")

const app = express ()

const PORT = 8080

const server = app.listen(PORT, ()=> {
    console.log("server corriendo en el puerto" + PORT)
})

appp.get("./productos", (req, res) =>  {
    res.send(prods.getAll)
})
appp.get("./productoRandom", (req, res) =>  {
    res.send("Hola Mundo")
})