$(function(){
    $('.form-nuevaprima form').form({
        codmaterial : {
            identifier : 'codmaterial',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese un Codigo'
                }
            ]
        },
        nombre : {
            identifier : 'nombre',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese un Nombre'
                }
            ]
        },
        color : {
            identifier : 'color',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese un Color'
                }
            ]
        },

        metraje : {
            identifier : 'metraje',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese el Metraje del Material'
                },
                {
                type: 'number',
                prompt: 'El metraje debe ser Numerico'
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