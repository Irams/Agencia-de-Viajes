import express from 'express';
import router from './routes/index.js';

// const express = require ('express');

const app = express();

//Definir el puerto
const port = process.env.PORT || 4000;

//Habilitar Pug
app.set('view engine', 'pug');

//Definir la carpeta publica
app.use(express.static('public'));

//Agregar rutas
app.use('/', router);


app.listen(port, ()=>{
    console.log(`Servidor en puerto ${port}`);
});