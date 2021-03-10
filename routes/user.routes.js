const { Router } = require('express');
const router = Router();
const {check} = require('express-validator');

const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch } = require('../controllers/usuarios.controller');
const { esRolValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');


router.get('/', usuariosGet );

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener mas de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    // check('role', 'No es un rol válido').isIn(['USER_ROLE','ADMIN_ROLE']),
    check('correo').custom( emailExiste ),
    check('role').custom( esRolValido ),
    validarCampos
], usuariosPost);

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    check('role').custom( esRolValido ),
    validarCampos
] ,usuariosPut);

router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    validarCampos
],usuariosDelete);

router.patch('/', usuariosPatch);


module.exports = router;