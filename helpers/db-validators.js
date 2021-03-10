const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRolValido = async(role = '') => {

    const existeRol = await Role.findOne({ role });
    if ( !existeRol ) {
        throw new Error(`El rol: ${role}, no está registrado en el DB`);
    }
}

const emailExiste = async(correo = '') => {

    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo: ${correo}, ya esta registrado`);
    }
}

const existeUsuarioPorId = async(id) => {

    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id: ${id}, no existe`);
    }
}

module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioPorId
}