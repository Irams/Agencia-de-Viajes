import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

// const express = require ('express');
const app = express();

//Conectar la BD
db.authenticate()
    .then( () =>console.log('base de datos conectada') )
    .catch( error => console.log(error));

//Definir el puerto
const port = process.env.PORT || 4000;

//Habilitar Pug
app.set('view engine', 'pug');

//Obtener el año actual
app.use((req, res, next)=>{
    // console.log(res);
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
})

//Agregar bodyparser oara leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//Definir la carpeta publica
app.use(express.static('public'));

//Agregar rutas
app.use('/', router);


app.listen(port, ()=>{
    console.log(`Servidor en puerto ${port}`);
});