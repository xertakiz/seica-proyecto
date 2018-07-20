$(function(){
    //funcion ajax elminar
      $('#tbl-planta #btn-eliminar').click(function(e){
        e.preventDefault();
        var elemento = $(this);
        var id = elemento.parent().parent().find('#codplanta').text();
            var confirmar = confirm('Desea Eliminar este Material?');
            if(confirmar){
            $.ajax({
                url :'http://localhost:3000/users/prima/planta/eliminarplanta',
                method : 'post',
                data : {codplanta : id},
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
 