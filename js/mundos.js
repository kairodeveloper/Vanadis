$(document).ready(function() {
   
  $("#menu_icon_desktop").mouseover(function() {

    var elementos = document.getElementsByClassName('opcao_mobile_desktop');

    for (var i = 0; i < elementos.length; i++) {
      if(elementos[i].style.display=='block'){
        elementos[i].style.display='none';
      }else{
        elementos[i].style.display='block';              
      }
    };

  });      
   
});
