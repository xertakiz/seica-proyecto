$(function(){
    $('.form-nuevaterminado form').form({

        ticketpro : {
            identifier : 'ticketpro',
            rules : [
                {
                    type : 'empty',
                    prompt : 'Por favor Ingrese un Ticket de Produccion'
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