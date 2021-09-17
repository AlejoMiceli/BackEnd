const fs = require ("fs")    
const express = require ("express")
const app = express ()


class Contenedor {
    constructor(strProductos){
    this.path = `./${strProductos}.txt`

    }
      save (item) {
        let data = fs.readFileSync(this.path, "utf-8")
        let dataJson = JSON.parse(data)
        const lastId = dataJson[dataJson.length - 1].id
        const newArr = [...dataJson,{...item, id:lastId+1}]
        fs.writeFileSync(this.path,JSON.stringify(newArr,null,2))
       return lastId + 1
       
    }
    getById(numero){
        let data = fs.readFileSync(this.path, "utf-8")
        let dataJson = JSON.parse(data)
        const obj = dataJson.filter((e)=> e.id === numero)

        return obj 
    }

    getAll(){
        let data = JSON.parse(fs.readFileSync(this.path, "utf-8"))
        console.log(data)
        return data
    }

    deleteById(id){
        let data = fs.readFileSync(this.path, "utf-8")
        let dataJson = JSON.parse(data)
        const newArr = dataJson.filter((element)=> element.id != id
        )
        fs.writeFileSync(this.path,JSON.stringify(newArr,null,2))        
    }
    

    deleteAll() {
        let data = fs.readFileSync(this.path, "utf-8")
        let dataJson = JSON.parse(data)

        json.unlink(dataJson, error => {
            if (error){
               return "hubo un error"
            }
        })
    }

}


    const prods = new Contenedor ("productos")

    const newProd = {
        title: "i7",
        price : 3500,
        image: "lkdjfñlkjflkdsa"
    }

    // console.log(prods.getAll())
    // console.log(prods.deleteById(1))
    // console.log(prods.getAll())



    
    const PORT = 8080

    function aleatorio(minimo,maximo){
        return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
      }
    
    
    const server = app.listen(PORT, ()=> {
        console.log("server corriendo en el puerto " + PORT)
    })
    
    app.get("/productos", (req, res) =>  {

        res.send(prods.getAll())
    })
    app.get("/productoRandom", (req, res) =>  {
        let arrProductos = prods.getAll()
        let randomIndex = aleatorio(0, arrProductos.length - 1)
        res.send(arrProductos[randomIndex])
    })

 