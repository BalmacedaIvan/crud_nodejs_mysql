const express = require('express');
const app = express();

app.listen(5000, ()=>{
    console.log("---- SERVIDOR CORRIENDO EN http://localhost:5000 ---- ");
});

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));

app.use('/', require('./router'))