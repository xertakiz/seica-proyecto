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
//______________________________________	
//	rutas materia prima
router.get('/users/prima',AuthMiddleware.isLogged, controllers.MatPrimaController.getPrima);

//______________________________________
	//rutas prima/Pega

//______________________________________
	//rutas prima/Planta
router.get('/users/prima/planta',AuthMiddleware.isLogged, controllers.MatPrimaController.getPlanta);
router.get('/users/prima/planta/nuevo',AuthMiddleware.isLogged, controllers.MatPrimaController.getNuevoPlanta);
router.post('/users/prima/planta/crearplanta',AuthMiddleware.isLogged, controllers.MatPrimaController.postNuevoPlanta);
router.post('/users/prima/planta/eliminarplanta',AuthMiddleware.isLogged, controllers.MatPrimaController.EliminarPlanta);
router.get('/users/prima/planta/modificarplanta/:codplanta',AuthMiddleware.isLogged, controllers.MatPrimaController.getModificarPlanta);
router.post('/users/prima/planta/editarplanta',AuthMiddleware.isLogged, controllers.MatPrimaController.postModificarPlanta);
//______________________________________
	//rutas prima/Material
router.get('/users/prima/material',AuthMiddleware.isLogged, controllers.MatPrimaController.getMaterial);
router.get('/users/prima/material/nuevo',AuthMiddleware.isLogged, controllers.MatPrimaController.getNuevoMaterial);
router.post('/users/prima/material/crearmaterial',AuthMiddleware.isLogged, controllers.MatPrimaController.postNuevoMaterial);
router.post('/users/prima/material/eliminarmaterial',AuthMiddleware.isLogged, controllers.MatPrimaController.EliminarMaterial);
router.get('/users/prima/material/modificarmaterial/:codmaterial',AuthMiddleware.isLogged, controllers.MatPrimaController.getModificarMaterial);
router.post('/users/prima/material/editarmaterial',AuthMiddleware.isLogged, controllers.MatPrimaController.postModificarMaterial);
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
	//rutas productos terminados (Administradores)
router.get('/users/terminado',AuthMiddleware.isLogged, controllers.TerminadoController.getTerminado);
router.get('/users/terminado/nuevo',AuthMiddleware.isLogged, controllers.TerminadoController.getNuevoTerminado);
router.post('/users/terminado/crearterminado',AuthMiddleware.isLogged, controllers.TerminadoController.postNuevoTerminado);
router.post('/users/terminado/eliminarterminado',AuthMiddleware.isLogged, controllers.TerminadoController.EliminarTerminado);


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



//__________________________________________________________________
//rutas Publicas
router.get('/public/prima', controllers.PublicController.getPublicPrima);
router.get('/public/produccion', controllers.PublicController.getPublicProduccion);
router.get('/public/produccion/status/:ticketpro', controllers.PublicController.getPublicStatus);

module.exports = router;

