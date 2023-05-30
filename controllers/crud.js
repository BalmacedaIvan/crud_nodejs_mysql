const conexion = require('../database/db')

// Crear Registros
exports.save = (req, res)=>{
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('INSERT INTO usuarios SET ?', {nombreusuario:user, rolusuario:rol}, (error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('/')
        }
    })
};

// Actualizar registros
exports.update = (req, res)=>{
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;

    conexion.query('UPDATE usuarios SET ? WHERE idusuario = ?', [{nombreusuario: user, rolusuario: rol}, id], (error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('/')
        };
    });
};

