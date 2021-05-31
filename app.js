var express = require("express");
var app = express();

const pug = require("pug");

app.use(express.static(__dirname+"/public"));

const puerto = process.env.PORT || 3000;

var vaso_array = [
    {capacidad:"0", texto:"0% de alcohol en el recipiente", imagen:"0.png"},
    {capacidad:"10",texto:"10% de alcohol en el recipiente", imagen:"10.png"},
    {capacidad:"20",texto:"20% de alcohol en el recipiente", imagen:"20.png"},
    {capacidad:"30",texto:"30% de alcohol en el recipiente", imagen:"30.png"},
    {capacidad:"40",texto:"40% de alcohol en el recipiente", imagen:"40.png"},
    {capacidad:"50",texto:"50% de alcohol en el recipiente", imagen:"50.png"},
    {capacidad:"60",texto:"60% de alcohol en el recipiente", imagen:"60.png"},
    {capacidad:"70",texto:"70% de alcohol en el recipiente", imagen:"70.png"},
    {capacidad:"80",texto:"80% de alcohol en el recipiente", imagen:"80.png"},
    {capacidad:"90",texto:"90% de alcohol en el recipiente", imagen:"90.png"},
    {capacidad:"100",texto:"100% de alcohol en el recipiente", imagen:"100.png"},
    {capacidad:"lleno",texto:"Cuidado, recipiente lleno", imagen:"lleno.png"}

    ]

app.get("/",(req,res)=>{
    //res.send("index.html");
    res.render("index.pug",{
        titulo: "Medidor de cantidad de alcohol",
        texto: "Porcentaje de Alcohol",
        imagen: "0.png",
        vasos: vaso_array
    });
});

app.get("/vaso/:capacidad",(req,res)=>{
    var datosVaso = vaso_array.filter((vaso)=>{
        if (req.params.capacidad==vaso.capacidad) {
            return vaso;
        }
    })[0];
    res.render("medida.pug",{
        capacidad: req.params.capacidad,
        data: datosVaso
    });
});

app.use((req,res)=>{
    res.status(400);
    let error = req.originalUrl;
    res.render("404.pug",{texto:error});
});

app.listen(puerto,()=>{
    console.log("Servidor en el puerto ",puerto);
});//puerto

