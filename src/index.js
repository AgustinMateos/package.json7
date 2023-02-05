
/*const http= require('http')

const PORT=4000 
const server =http.createServer((request,response)=>{
    response.end("Este es el primer servidor para vos gil")
})

server.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`)
}) */

import express from 'express'

const app = express()
const PORT = 4000
const productos = [{ id: 1, nombre: "pepitas",categoria:"snack" },
{ id: 2, nombre: "pepitas light",categoria:"snack light" }]
/* el metodo get nos permite ante 
determinada ruta especidifaca se indica 
la accion correspondiente a traves de peteciones*/

/*antes de la configuracion de rutas debemos implemtar 
urlencoded para que viajes por la url y mapearlo en req.query*/
app.use(express.urlencoded({extended:true}))

//configuracion de rutas
app.get('/contacto', (req, res) => {
    res.send("hola, esta es la pagina de contacto")
})
//ruta inicial/home
app.get('/', (req, res) => {
    res.send("hola, esta es la pagina de inicio")
})
/*el id no tiene nada que ver con el parametro.
y es strign al igual q todos los parametros, debemos parcear los elementos*/
app.get('/producto/:id', (req, res) => {
    console.log(productos.find(prod=>prod.id===parseInt(req.params.id)))
   
    res.send("hola, esta es la pagina de productos ")
})
/*consultas al query
app.get('/user', (req, res) => {
    let{nombre,apellido}=req.query
    console.log(nombre,apellido)
    res.send("user route")
})*/
//consulta que devuelve un objeto de lo ingresado
app.get('/producto', (req, res) => {
    let {categoria}=req.query
    console.log(productos.filter(producto=>producto.categoria ===categoria))
    res.send("Producto route")
})


/*escucha al servidor, en la variable 
port voy ejecutar una funcion flecha y
 muestro por consola server on port  (el listen va al final)*/

app.listen(PORT, () => {
    console.log(`Server on port${PORT}`)
})