$(function(){
    //funcion ajax elminar
      $('#tbl-produccion #btn-eliminar').click(function(e){
        e.preventDefault();
        var elemento = $(this);
        var id = elemento.parent().parent().find('#ticketpro').text();
            var confirmar = confirm('Desea Eliminar esta Produccion?');
            if(confirmar){
            $.ajax({
                url :'http://localhost:3000/users/produccion/eliminarproduccion',
                method : 'post',
                data : {ticketpro : id},
                success : function(res){
                   //console.log(res);
                    if(res.res){
                        elemento.parent().parent().remove();
                   }
               }
           });
        }
        
      });
 });
 