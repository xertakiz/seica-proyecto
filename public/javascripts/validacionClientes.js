$(function(){
    $('.form-nuevocliente form').form({
        codcliente : {
            identifier : 'codcliente',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese Rif o Cedula'
                },
                {
                    type: 'integer',
                    prompt: 'El Rif o Cedula debe ser un Numero Entero'
                }
            ]
        },
        nombre : {
            identifier : 'nombre',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese Razon Social o Nombre'
                }
            ]
        },
        ciudad : {
            identifier : 'ciudad',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese una Ciudad'
                }
            ]
        },

        estado : {
            identifier : 'estado',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese un Estado'
                }
            ]   
        },
        telefono : {
            identifier : 'telefono',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese un numero de Telefono'
                },
                {
                    type: 'integer',
                    prompt: 'El numero de telefono debe ser un Numero Entero'
                }
            ]
        }
    });
});