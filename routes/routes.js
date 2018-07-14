var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');
var AuthMiddleware = require('.././middleware/auth');


router.get('/inicio', controllers.HomeController.index);

//__________________________________________________________________
//rutas para modulos de ingreso al sistema
	//rutas de ingreso
router.get('/auth/signin', controllers.UserController.getSignIn);
router.post('/auth/signin', passport.authenticate('local', {
	successRedirect : '/users/panel',
	failureRedirect : '/auth/signin',
	failureFlash : true 
}));
//______________________________________
	//ruta de modulo salida de usuario
router.get('/users/logout', controllers.UserController.logout);
//______________________________________
	//ruta principal de usuarios registrados
router.get('/users/panel', AuthMiddleware.isLogged, controllers.UserController.getUserPanel)
//______________________________________
	//ruta de modulo de registro de Usuario
router.get('/users/signup',AuthMiddleware.isLogged, controllers.UserController.getSignUp);
router.post('/users/signup',AuthMiddleware.isLogged, controllers.UserController.postSignUp);

//__________________________________________________________________
//rutas para todos los modulos de produccion (Administradores)
	//rutas materia prima
router.get('/users/prima',AuthMiddleware.isLogged, controllers.MatPrimaController.getPrima);
router.get('/users/prima/nuevo',AuthMiddleware.isLogged, controllers.MatPrimaController.getNuevoPrima);
router.post('/users/prima/crearprima',AuthMiddleware.isLogged, controllers.MatPrimaController.postNuevoPrima);
router.post('/users/prima/eliminarprima',AuthMiddleware.isLogged, controllers.MatPrimaController.EliminarPrima);
router.get('/users/prima/modificarprima/:codmaterial',AuthMiddleware.isLogged, controllers.MatPrimaController.getModificarPrima);
router.post('/users/prima/editarprima',AuthMiddleware.isLogged, controllers.MatPrimaController.postModificarPrima);
//______________________________________
	//rutas produccion
router.get('/users/produccion',AuthMiddleware.isLogged, controllers.ProduccionController.getProduccion);
router.get('/users/produccion/nuevo',AuthMiddleware.isLogged, controllers.ProduccionController.getNuevoProduccion);
router.post('/users/produccion/crearproduccion',AuthMiddleware.isLogged, controllers.ProduccionController.postNuevoProduccion);
router.post('/users/produccion/eliminarproduccion',AuthMiddleware.isLogged, controllers.ProduccionController.EliminarProduccion);
router.get('/users/produccion/modificarproduccion/:ticketpro',AuthMiddleware.isLogged, controllers.ProduccionController.getModificarProduccion);
router.post('/users/produccion/editarproduccion',AuthMiddleware.isLogged, controllers.ProduccionController.postModificarProduccion);

router.get('/users/produccion/modificarstatus/:ticketpro',AuthMiddleware.isLogged, controllers.ProduccionController.getModificarStatus);
router.post('/users/produccion/editarstatus',AuthMiddleware.isLogged, controllers.ProduccionController.postModificarStatus);

//______________________________________
	//rutas productos terminados





//__________________________________________________________________
//rutas para modulo Clientes (Administradores)
router.get('/users/clientes',AuthMiddleware.isLogged, controllers.ClientesController.getClientes);
router.get('/users/clientes/nuevo',AuthMiddleware.isLogged, controllers.ClientesController.getNuevoCliente);
router.post('/users/clientes/crearcliente',AuthMiddleware.isLogged, controllers.ClientesController.postNuevoCliente);
router.post('/users/clientes/eliminarcliente',AuthMiddleware.isLogged, controllers.ClientesController.EliminarCliente);
router.get('/users/clientes/modificarcliente/:codcliente',AuthMiddleware.isLogged, controllers.ClientesController.getModificarCliente);
router.post('/users/clientes/editarcliente',AuthMiddleware.isLogged, controllers.ClientesController.postModificarCliente);

//__________________________________________________________________
//rutas Despachos (Administradores)




module.exports = router;

