$(function(){
    //funcion ajax elminar
      $('#tbl-cliente #btn-eliminar').click(function(e){
        e.preventDefault();
        var elemento = $(this);
        var id = elemento.parent().parent().find('#codcliente').text();
            var confirmar = confirm('Desear Eliminar producto');
            if(confirmar){
            $.ajax({
                url :'http://localhost:3000/users/clientes/eliminarcliente',
                method : 'post',
                data : {codcliente : id},
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
 