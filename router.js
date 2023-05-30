const express = require('express');

const router = express.Router();

const conexion = require('./database/db');

// Ruta para enviar datos y crear la fila en index
router.get('/', (req, res)=>{
     conexion.query('SELECT * FROM usuarios', (error, results)=>{
        if(error){
            throw error;
        }else{ // {parametros a enviar, parametros locales}
            res.render('index', {results: results})
        }
    })
});

// Ruta para crear registros
router.get('/create', (req, res)=>{
    res.render('create');
});

// Ruta para editar registros
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM usuarios WHERE idusuario = ? ', [id], (error, results)=>{
        if(error){
            throw error;
        }else{ // {parametros a enviar, parametros locales}
            res.render('edit', {item:results[0]})
        }
    })
})

// Ruta para eliminar registro
router.get('/delete/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM usuarios WHERE idusuario = ?', [id], (error, results)=>{
        if(error){
            throw error
        }else{
            res.redirect('/');
        }
    })
})

const crud = require('./controllers/crud');

router.post('/save', crud.save);

router.post('/update', crud.update);

module.exports = router;