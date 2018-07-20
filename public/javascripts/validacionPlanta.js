$(function(){
    $('.form-nuevaplanta form').form({
        codplanta : {
            identifier : 'codplanta',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese un Codigo'
                }
            ]
        },
        nomplanta : {
            identifier : 'nomplanta',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese un Nombre'
                }
            ]
        },
        existencia : {
            identifier : 'existencia',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese la cantidad de Planta'
                },
                {
                type: 'integer',
                prompt: 'La Existencia debe ser Entero'
                }
            ]   
        },
        descripcion : {
            identifier : 'descripcion',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese una Descripcion'
                }
            ]
        }
    });
});