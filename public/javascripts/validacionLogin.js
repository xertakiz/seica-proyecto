$(function(){
    $('.form-login form').form({
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
        }
    });
});