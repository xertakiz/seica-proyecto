$(function(){
    //funcion ajax elminar
      $('#tbl-prima #btn-eliminar').click(function(e){
        e.preventDefault();
        var elemento = $(this);
        var id = elemento.parent().parent().find('#codmaterial').text();
            var confirmar = confirm('Desear Eliminar producto');
            if(confirmar){
            $.ajax({
                url :'http://localhost:3000/users/prima/eliminarprima',
                method : 'post',
                data : {codmaterial : id},
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
 