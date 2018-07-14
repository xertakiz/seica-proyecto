$(function(){
    $('.form-nuevaproduccion form').form({
        ticketpro : {
            identifier : 'ticketpro',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor ingrese un numero de Ticket'
                },
                {
                type: 'integer',
                prompt: 'El Ticket debe ser un Numero Entero'
                }
            ]
        },
        modelo : {
            identifier : 'modelo',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor seleccione un Modelo'
                }
            ]
        },
        tcalzado : {
            identifier : 'tcalzado',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor seleccione un Tipo de Calzado'
                }
            ]
        },
        color1 : {
            identifier : 'color1',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor seleccione el color 1'
                }
            ]   
        },
        color2 : {
            identifier : 'color2',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor seleccione el color 2'
                }
            ]   
        },
        color3 : {
            identifier : 'color3',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor seleccione el color 3'
                }
            ]   
        },
        pares : {
            identifier : 'pares',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor seleccione la cantidad de Pares'
                }
            ]
        },
        notas : {
            identifier : 'notas',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor seleccione la cantidad de Notas'
                }
            ]
        }
    });
});