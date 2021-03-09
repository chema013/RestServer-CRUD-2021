const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { q, nombre = 'no name', apikey } = req.query;

    res.json({
        msg: "get API - controlador",
        q,
        nombre,
        apikey
    });
}

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: "post API controller",
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;

    res.json({
        msg: "put API - controller",
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete API - controller"
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "patch API"
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}