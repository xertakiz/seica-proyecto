$(function(){
    //funcion ajax elminar
      $('#tbl-terminados #btn-eliminar').click(function(e){
        e.preventDefault();
        var elemento = $(this);
        var id = elemento.parent().parent().find('#codterminado').text();
            var confirmar = confirm('Desea Eliminar este Producto Terminado?');
            if(confirmar){
            $.ajax({
                url :'http://localhost:3000/users/terminado/eliminarterminado',
                method : 'post',
                data : {codterminado : id},
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
 