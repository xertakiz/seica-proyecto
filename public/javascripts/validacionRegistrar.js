$(function(){
    $('.form-registrar form').form({
        usuario : {
            identifier : 'usuario',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese un Usuario'
                }
            ]
        },
        password : {
            identifier : 'password',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese un Password'
                }
            ]
        },
        nombre : {
            identifier : 'nombre',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese un nombre'
                }
            ]
        },
        apellido : {
            identifier : 'apellido',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese un apellido'
                }
            ]
        },
        cedula : {
            identifier : 'cedula',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese una Cedula valida'
                },
                {
                type: 'number',
                prompt: 'La cedula debe ser un numero Entero'
                }
            ]
        },
        email : {
            identifier : 'email',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese un Email'
                }
            ]
        },
        telefono : {
            identifier : 'telefono',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese una telefono valida'
                },
                {
                type: 'number',
                prompt: 'La telefono debe ser un numero Entero'
                }
            ]
        }

    });
});