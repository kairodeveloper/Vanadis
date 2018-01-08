$(document).ready(function() {
   
  $("#menu_icon_desktop_deuses").mouseover(function() {

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

function abreAesir() {
  if($("#conteudo_sobre_os_aesir").hasClass("escondido")){
    $("#conteudo_sobre_os_vanir").addClass("escondido");    
    $("#conteudo_sobre_os_aesir").removeClass("escondido");    
  }else{
    $("#conteudo_sobre_os_aesir").addClass("escondido"); 
  }
}

function abreVanir() {
  if($("#conteudo_sobre_os_vanir").hasClass("escondido")){
    $("#conteudo_sobre_os_aesir").addClass("escondido");            
    $("#conteudo_sobre_os_vanir").removeClass("escondido");
  }else{
    $("#conteudo_sobre_os_vanir").addClass("escondido");    
  }
}
